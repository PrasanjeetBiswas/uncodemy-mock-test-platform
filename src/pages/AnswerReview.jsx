import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, XCircle, MinusCircle, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import styles from './AnswerReview.module.css';
import { tests } from '../data/tests';
import { questions } from '../data/questions';
import Breadcrumb from '../components/common/Breadcrumb';

const AnswerReview = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const test = tests.find(t => t.id === testId);
  const testQuestions = questions.filter(q => q.testId === testId);

  const [answers, setAnswers] = useState({});
  const [filter, setFilter] = useState('all'); // all, correct, incorrect, skipped
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const savedResult = localStorage.getItem(`result_${testId}`);
    if (savedResult) {
      const parsed = JSON.parse(savedResult);
      setAnswers(parsed.answers || {});
    } else {
      navigate(`/test/${testId}`);
    }
  }, [testId, navigate]);

  // Process all questions to append status
  const processedQuestions = useMemo(() => {
    return testQuestions.map(q => {
      const userAnswer = answers[q.id];
      let status = 'skipped';
      if (userAnswer !== undefined) {
        status = userAnswer === q.correctOption ? 'correct' : 'incorrect';
      }
      return { ...q, userAnswer, status };
    });
  }, [testQuestions, answers]);

  // Filter questions based on active tab
  const filteredQuestions = useMemo(() => {
    if (filter === 'all') return processedQuestions;
    return processedQuestions.filter(q => q.status === filter);
  }, [processedQuestions, filter]);

  // Calculate counts for tabs
  const counts = useMemo(() => {
    return processedQuestions.reduce((acc, q) => {
      acc.all++;
      acc[q.status]++;
      return acc;
    }, { all: 0, correct: 0, incorrect: 0, skipped: 0 });
  }, [processedQuestions]);

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  if (!test || processedQuestions.length === 0) return <div>Loading...</div>;

  const currentQ = filteredQuestions[currentIndex];

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) setCurrentIndex(prev => prev + 1);
  };
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const getOptionClass = (optIndex) => {
    if (optIndex === currentQ.correctOption) return styles.optionCorrect;
    if (optIndex === currentQ.userAnswer && currentQ.userAnswer !== currentQ.correctOption) return styles.optionIncorrect;
    return styles.optionNeutral;
  };

  const breadcrumbs = [
    { label: 'Result', path: `/result/${testId}` },
    { label: 'Answer Review', path: `/result/${testId}/review` }
  ];

  return (
    <div className={styles.pageContainer}>
      <div className={`container ${styles.layout}`}>
        
        <div className={styles.headerArea}>
          <Breadcrumb items={breadcrumbs} />
          <h1 className={styles.title}>Answer Review</h1>
        </div>

        {/* Filters / Tabs */}
        <div className={styles.tabsRow}>
          <button 
            className={`${styles.tabBtn} ${filter === 'all' ? styles.activeTab : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({counts.all})
          </button>
          <button 
            className={`${styles.tabBtn} ${filter === 'correct' ? styles.activeTab : ''}`}
            onClick={() => setFilter('correct')}
          >
            Correct ({counts.correct})
          </button>
          <button 
            className={`${styles.tabBtn} ${filter === 'incorrect' ? styles.activeTab : ''}`}
            onClick={() => setFilter('incorrect')}
          >
            Incorrect ({counts.incorrect})
          </button>
          <button 
            className={`${styles.tabBtn} ${filter === 'skipped' ? styles.activeTab : ''}`}
            onClick={() => setFilter('skipped')}
          >
            Skipped ({counts.skipped})
          </button>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className={styles.emptyState}>No questions found for this filter.</div>
        ) : (
          <div className={styles.reviewLayout}>
            
            {/* Left: Question Card */}
            <div className={styles.questionCard}>
              <div className={styles.qHeader}>
                <h2>Question {currentIndex + 1} of {filteredQuestions.length}</h2>
                <div className={`${styles.statusBadge} ${styles[currentQ.status]}`}>
                  {currentQ.status === 'correct' && <><CheckCircle2 size={16}/> Correct</>}
                  {currentQ.status === 'incorrect' && <><XCircle size={16}/> Incorrect</>}
                  {currentQ.status === 'skipped' && <><MinusCircle size={16}/> Skipped</>}
                </div>
              </div>
              
              <p className={styles.qText}>{currentQ.question}</p>
              
              <div className={styles.optionsList}>
                {currentQ.options.map((opt, idx) => (
                  <div key={idx} className={`${styles.optionBox} ${getOptionClass(idx)}`}>
                    <span className={styles.optionLabel}>{String.fromCharCode(65 + idx)}</span>
                    <span className={styles.optionText}>{opt}</span>
                    
                    {idx === currentQ.correctOption && <CheckCircle2 size={20} className={styles.iconCorrect} />}
                    {(idx === currentQ.userAnswer && currentQ.userAnswer !== currentQ.correctOption) && <XCircle size={20} className={styles.iconIncorrect} />}
                  </div>
                ))}
              </div>

              <div className={styles.navRow}>
                <button onClick={handlePrev} disabled={currentIndex === 0} className={styles.navBtn}>
                  <ChevronLeft size={16} /> Previous
                </button>
                <button onClick={handleNext} disabled={currentIndex === filteredQuestions.length - 1} className={styles.navBtn}>
                  Next <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Right: Explanation Sidebar */}
            <div className={styles.sidebar}>
              <div className={styles.answerBox}>
                <div className={styles.answerRow}>
                  <span>Your Answer</span>
                  <strong className={currentQ.userAnswer === undefined ? styles.textNeutral : (currentQ.userAnswer === currentQ.correctOption ? styles.textSuccess : styles.textError)}>
                    {currentQ.userAnswer !== undefined ? String.fromCharCode(65 + currentQ.userAnswer) : 'Skipped'}
                  </strong>
                </div>
                <div className={styles.answerRow}>
                  <span>Correct Answer</span>
                  <strong className={styles.textSuccess}>{String.fromCharCode(65 + currentQ.correctOption)}</strong>
                </div>
              </div>

              <div className={styles.explanationBox}>
                <h3>Explanation</h3>
                <p>{currentQ.explanation}</p>
              </div>
              
              {currentQ.status === 'incorrect' && (
                <div className={styles.learnPrompt}>
                  <p>Need to strengthen this topic?</p>
                  <a href="https://uncodemy.com/tutorial/" target="_blank" rel="noopener noreferrer">
                    Learn More <ExternalLink size={14}/>
                  </a>
                </div>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default AnswerReview;
