import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Target, Clock, CheckCircle2, XCircle, MinusCircle, RefreshCcw, ExternalLink } from 'lucide-react';
import styles from './Result.module.css';
import { tests } from '../data/tests';
import { questions } from '../data/questions';

const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
};

const Result = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const test = tests.find(t => t.id === testId);
  const testQuestions = questions.filter(q => q.testId === testId);
  
  const [resultData, setResultData] = useState(null);

  useEffect(() => {
    // In a real app, fetch from backend. Here we read from localStorage.
    const savedResult = localStorage.getItem(`result_${testId}`);
    if (savedResult) {
      const parsed = JSON.parse(savedResult);
      calculateStats(parsed);
    } else {
      // No result found, redirect back
      navigate(`/test-series/${test?.courseId}/${test?.seriesId}/${testId}`);
    }
  }, [testId]);

  const calculateStats = (savedResult) => {
    const answers = savedResult.answers || {};
    let correct = 0;
    let incorrect = 0;
    
    // Calculate based on mock questions
    testQuestions.forEach(q => {
      const userAnswer = answers[q.id];
      if (userAnswer !== undefined) {
        if (userAnswer === q.correctOption) {
          correct++;
        } else {
          incorrect++;
        }
      }
    });

    const total = testQuestions.length;
    const attempted = correct + incorrect;
    const skipped = total - attempted;
    const scorePercent = Math.round((correct / total) * 100);
    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;
    const passed = scorePercent >= (test?.passingPercentage || 40);

    setResultData({
      ...savedResult,
      total,
      attempted,
      correct,
      incorrect,
      skipped,
      scorePercent,
      accuracy,
      passed,
      passingMarks: test?.passingPercentage || 40
    });
  };

  const handleRetake = () => {
    localStorage.removeItem(`result_${testId}`);
    navigate(`/test/${testId}`);
  };

  if (!test || !resultData) return <div className={styles.loading}>Calculating results...</div>;

  return (
    <div className={styles.pageContainer}>
      <div className="container">
        
        <div className={styles.resultHeader}>
          <div className={styles.badge}>RESULT</div>
          <h1>{test.title}</h1>
        </div>

        <div className={styles.mainContent}>
          {/* Top Main Result Card */}
          <div className={styles.scoreCard}>
            
            <div className={styles.scoreLeft}>
              <div className={styles.scoreCircle}>
                <svg viewBox="0 0 36 36" className={styles.circularChart}>
                  <path className={styles.circleBg}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path className={`${styles.circle} ${resultData.passed ? styles.circlePass : styles.circleFail}`}
                    strokeDasharray={`${resultData.scorePercent}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" className={styles.percentageText}>{resultData.scorePercent}%</text>
                </svg>
              </div>
              
              <div className={styles.scoreDetails}>
                <div className={`${styles.statusBadge} ${resultData.passed ? styles.pass : styles.fail}`}>
                  {resultData.passed ? 'PASS' : 'FAIL'}
                </div>
                <h2>{resultData.passed ? 'Great Job! You have passed the test.' : 'Keep practicing! You failed this time.'}</h2>
                <div className={styles.scoreFractions}>
                  Your Score: <strong>{resultData.correct}</strong> / {resultData.total}
                </div>
              </div>
            </div>

            <div className={styles.scoreRight}>
              <div className={styles.statLine}>
                <span>Total Questions</span>
                <strong>{resultData.total}</strong>
              </div>
              <div className={styles.statLine}>
                <span>Attempted</span>
                <strong>{resultData.attempted}</strong>
              </div>
              <div className={styles.statLine}>
                <span className={styles.textSuccess}><CheckCircle2 size={14}/> Correct</span>
                <strong className={styles.textSuccess}>{resultData.correct}</strong>
              </div>
              <div className={styles.statLine}>
                <span className={styles.textError}><XCircle size={14}/> Incorrect</span>
                <strong className={styles.textError}>{resultData.incorrect}</strong>
              </div>
              <div className={styles.statLine}>
                <span className={styles.textNeutral}><MinusCircle size={14}/> Skipped</span>
                <strong className={styles.textNeutral}>{resultData.skipped}</strong>
              </div>
            </div>
            
          </div>

          {/* Secondary Stats Row */}
          <div className={styles.secondaryStats}>
            <div className={styles.secStatBox}>
              <Target size={20} />
              <div>
                <strong>{resultData.accuracy}%</strong>
                <span>Accuracy</span>
              </div>
            </div>
            <div className={styles.secStatBox}>
              <Clock size={20} />
              <div>
                <strong>{formatTime(resultData.timeTakenSeconds)}</strong>
                <span>Time Taken</span>
              </div>
            </div>
            <div className={styles.secStatBox}>
              <CheckCircle2 size={20} />
              <div>
                <strong>{resultData.passingMarks}%</strong>
                <span>Passing Marks</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.actionRow}>
            <Link to={`/result/${testId}/review`} className={styles.primaryBtn}>
              View Answers
            </Link>
            <button onClick={handleRetake} className={styles.secondaryBtn}>
              <RefreshCcw size={16} /> Retake Test
            </button>
            <Link to="/tests" className={styles.outlineBtn}>
              All Tests
            </Link>
          </div>

          {/* Learn More CTA (Crucial Business Requirement) */}
          <div className={styles.learnMoreCard}>
            <div className={styles.learnContent}>
              <h3>Want to strengthen your concepts?</h3>
              <p>Explore our comprehensive tutorials and master these skills to improve your future scores.</p>
            </div>
            <a 
              href="https://uncodemy.com/tutorial/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.learnMoreBtn}
            >
              Learn More on Tutorials <ExternalLink size={16} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Result;
