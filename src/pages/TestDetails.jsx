import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Clock, FileText, Target, AlertTriangle, BookOpen, CheckCircle2 } from 'lucide-react';
import styles from './TestDetails.module.css';
import Breadcrumb from '../components/common/Breadcrumb';
import { tests } from '../data/tests';
import { courses } from '../data/courses';
import { subjects } from '../data/subjects';

const TestDetails = () => {
  const { courseId, subjectId, testId } = useParams();
  const navigate = useNavigate();
  
  // Real app fetches from API. Using mock data.
  const test = tests.find(t => t.id === testId) || tests[0];
  const course = courses.find(c => c.id === courseId) || courses[0];
  const subject = subjects.find(s => s.id === subjectId) || subjects[1];
  
  const breadcrumbs = [
    { label: 'All Courses', path: '/' },
    { label: course.title, path: `/courses/${course.id}` },
    { label: subject.title, path: `/test-series/${course.id}/${subject.id}` },
    { label: test.title, path: `/test-series/${course.id}/${subject.id}/${test.id}` }
  ];

  const handleStartTest = () => {
    // Navigate directly to the test, skipping the unlock page
    navigate(`/test/${testId}`);
  };

  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <Breadcrumb items={breadcrumbs} />
        
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>{test.title}</h1>
            <p className={styles.subtitle}>Test your SQL knowledge and problem-solving skills.</p>
          </div>
          <div className={styles.testCode}>Code: {test.code}</div>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <FileText size={24} className={styles.statIcon} />
            <div className={styles.statInfo}>
              <strong>{test.questionsCount}</strong>
              <span>Questions</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <Clock size={24} className={styles.statIcon} />
            <div className={styles.statInfo}>
              <strong>{test.durationMinutes}</strong>
              <span>Minutes</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <Target size={24} className={styles.statIcon} />
            <div className={styles.statInfo}>
              <strong>40%</strong>
              <span>Passing Marks</span>
            </div>
          </div>
          <div className={styles.statCard}>
            <AlertTriangle size={24} className={styles.statIcon} />
            <div className={styles.statInfo}>
              <strong>No Negative</strong>
              <span>Marking</span>
            </div>
          </div>
        </div>

        <div className={styles.contentLayout}>
          <div className={styles.leftContent}>
            
            <section className={styles.section}>
              <h2>About Test</h2>
              <p>
                This test is designed to evaluate your understanding of {subject.title} core concepts including queries, joins, subqueries, aggregation, and more. It simulates a real assessment environment.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Instructions</h2>
              <ol className={styles.instructionList}>
                <li>Read each question carefully before answering.</li>
                <li>You can mark a question for review and come back later.</li>
                <li>You can change your answer before final submission.</li>
                <li>This test has no negative marking for incorrect answers.</li>
                <li>The test will be auto-submitted when the timer expires.</li>
                <li>Do not refresh or close the browser during the test.</li>
              </ol>
            </section>

          </div>

          <div className={styles.rightContent}>
            <div className={styles.syllabusCard}>
              <h3>Syllabus Covered</h3>
              <ul className={styles.syllabusList}>
                <li><CheckCircle2 size={16} /> SELECT Queries</li>
                <li><CheckCircle2 size={16} /> WHERE Clause</li>
                <li><CheckCircle2 size={16} /> JOINS</li>
                <li><CheckCircle2 size={16} /> GROUP BY & HAVING</li>
                <li><CheckCircle2 size={16} /> Subqueries</li>
                <li><CheckCircle2 size={16} /> Aggregate Functions</li>
                <li><CheckCircle2 size={16} /> Order By</li>
                <li><CheckCircle2 size={16} /> Set Operations</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomCTA}>
          <div className={styles.ctaText}>
            <h2>Good Luck!</h2>
            <p>Focus, attempt and achieve your best score.</p>
          </div>
          <button onClick={handleStartTest} className={styles.startBtn}>
            Start Test &rarr;
          </button>
        </div>

      </div>
    </div>
  );
};

export default TestDetails;
