import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Clock, ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';
import styles from './MockTest.module.css';
import { useExam } from '../hooks/useExam';
import { tests } from '../data/tests';
import { questions } from '../data/questions';

const formatTime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) {
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

const MockTest = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  
  const test = tests.find(t => t.id === testId);
  useSEO({ title: test ? `Taking ${test.title}` : "Mock Test", description: test ? `Take the mock test for ${test.title} at Uncodemy.` : "" });
  const testQuestions = questions.filter(q => q.testId === testId);
  
  // Submit Confirmation Modal State
  const [showSubmitModal, setShowSubmitModal] = useState(false);

  const {
    currentQuestionIndex,
    currentQuestion,
    totalQuestions,
    answers,
    markedForReview,
    visited,
    remainingSeconds,
    goToQuestion,
    nextQuestion,
    prevQuestion,
    selectAnswer,
    clearAnswer,
    toggleReview,
    submitExam
  } = useExam(test, testQuestions);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showSubmitModal) return;
      
      switch(e.key) {
        case 'ArrowRight': nextQuestion(); break;
        case 'ArrowLeft': prevQuestion(); break;
        case 'a': case 'A': selectAnswer(currentQuestion.id, 0); break;
        case 'b': case 'B': selectAnswer(currentQuestion.id, 1); break;
        case 'c': case 'C': selectAnswer(currentQuestion.id, 2); break;
        case 'd': case 'D': selectAnswer(currentQuestion.id, 3); break;
        default: break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestion, showSubmitModal]);

  if (!test || testQuestions.length === 0) return <div>Loading exam...</div>;

  const handleFinalSubmit = () => {
    setShowSubmitModal(false);
    submitExam();
  };

  const getPaletteClass = (qId, index) => {
    let classes = [styles.paletteBtn];
    if (index === currentQuestionIndex) classes.push(styles.current);
    
    if (answers[qId] !== undefined) {
      classes.push(styles.answered);
    } else if (visited[qId]) {
      classes.push(styles.notAnswered);
    }
    
    if (markedForReview[qId]) {
      classes.push(styles.review);
    }
    
    return classes.join(' ');
  };

  const totalAttempted = Object.keys(answers).length;
  const totalMarked = Object.keys(markedForReview).filter(k => markedForReview[k]).length;

  return (
    <div className={styles.examContainer}>
      {/* Exam Header */}
      <header className={styles.examHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.logo}>Uncodemy</div>
          <div className={styles.testName}>{test.title}</div>
        </div>
        
        <div className={styles.timer}>
          <Clock size={20} className={remainingSeconds < 300 ? styles.timerWarning : ''} />
          <span className={remainingSeconds < 300 ? styles.timerWarningText : ''}>
            {formatTime(remainingSeconds)}
          </span>
        </div>
        
        <button className={styles.headerSubmitBtn} onClick={() => setShowSubmitModal(true)}>
          Submit Test
        </button>
      </header>

      {/* Main Layout */}
      <div className={styles.mainArea}>
        
        {/* Left: Palette */}
        <aside className={styles.paletteSidebar}>
          <div className={styles.paletteHeader}>
            <h3>Question Palette</h3>
          </div>
          
          <div className={styles.paletteLegend}>
            <div className={styles.legendItem}>
              <div className={`${styles.legendDot} ${styles.answeredDot}`}></div> Answered
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendDot} ${styles.notAnsweredDot}`}></div> Not Answered
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.legendDot} ${styles.reviewDot}`}></div> Marked for Review
            </div>
          </div>
          
          <div className={styles.paletteGrid}>
            {testQuestions.map((q, index) => (
              <button
                key={q.id}
                className={getPaletteClass(q.id, index)}
                onClick={() => goToQuestion(index)} aria-label={`Go to question ${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </aside>

        {/* Right: Question Area */}
        <main className={styles.questionArea}>
          <div className={styles.questionHeader}>
            <span className={styles.questionNumber}>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
            <label className={styles.reviewToggle}>
              <input 
                type="checkbox" 
                checked={!!markedForReview[currentQuestion.id]} 
                onChange={() => toggleReview(currentQuestion.id)}
              />
              Mark for Review
            </label>
          </div>
          
          <div className={styles.questionText}>
            {currentQuestion.question}
          </div>
          
          <div className={styles.optionsList}>
            {currentQuestion.options.map((opt, idx) => (
              <button
                key={idx}
                className={`${styles.optionBtn} ${answers[currentQuestion.id] === idx ? styles.selectedOption : ''}`}
                onClick={() => selectAnswer(currentQuestion.id, idx)}
              >
                <span className={styles.optionLabel}>{String.fromCharCode(65 + idx)}</span>
                <span className={styles.optionText}>{opt}</span>
              </button>
            ))}
          </div>
          
          <div className={styles.actionFooter}>
            <button 
              className={styles.navBtn} 
              onClick={prevQuestion}
              disabled={currentQuestionIndex === 0}
            >
              <ChevronLeft size={18} /> Previous
            </button>
            
            <div className={styles.centerActions}>
              <button 
                className={styles.clearBtn} 
                onClick={() => clearAnswer(currentQuestion.id)}
                disabled={answers[currentQuestion.id] === undefined}
              >
                Clear Response
              </button>
            </div>
            
            <button 
              className={`${styles.navBtn} ${styles.nextBtn}`} 
              onClick={nextQuestion}
              disabled={currentQuestionIndex === totalQuestions - 1}
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        </main>
      </div>

      {/* Submit Confirmation Modal (STEP 9) */}
      {showSubmitModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalIcon}>
              <AlertCircle size={48} />
            </div>
            <h2>Submit Test?</h2>
            <p>You are about to submit your test.</p>
            
            <div className={styles.modalStats}>
              <div className={styles.modalStatRow}>
                <span>Total Questions</span>
                <strong>{totalQuestions}</strong>
              </div>
              <div className={styles.modalStatRow}>
                <span>Attempted</span>
                <strong>{totalAttempted}</strong>
              </div>
              <div className={styles.modalStatRow}>
                <span>Not Attempted</span>
                <strong>{totalQuestions - totalAttempted}</strong>
              </div>
              <div className={styles.modalStatRow}>
                <span>Marked for Review</span>
                <strong>{totalMarked}</strong>
              </div>
            </div>
            
            <div className={styles.modalActions}>
              <button className={styles.cancelBtn} onClick={() => setShowSubmitModal(false)}>
                Continue Test
              </button>
              <button className={styles.confirmSubmitBtn} onClick={handleFinalSubmit}>
                Submit Test
              </button>
            </div>
            <p className={styles.modalWarning}>Note: Once submitted, you cannot make any changes.</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Simple AlertCircle icon for the modal
const AlertCircle = ({size}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
);

export default MockTest;
