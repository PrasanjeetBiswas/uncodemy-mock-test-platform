import React from 'react';
import { useParams } from 'react-router-dom';
import { FileText, HelpCircle, TrendingUp, Calendar, CheckCircle2 } from 'lucide-react';
import styles from './TestSeries.module.css';
import Breadcrumb from '../components/common/Breadcrumb';
import TestRow from '../components/tests/TestRow';
import { testSeries } from '../data/testSeries';
import { tests } from '../data/tests';
import { courses } from '../data/courses';
import { subjects } from '../data/subjects';

const TestSeries = () => {
  const { courseId, subjectId } = useParams();
  
  // Handle shared test series (e.g. Python for Data Analytics vs Data Science)
  const mappedSeriesId = subjectId === 'ds-python' ? 'python' : subjectId;
  
  // Real app would fetch based on IDs. Using mock data directly for demo.
  const series = testSeries.find(s => s.id === mappedSeriesId) || testSeries[0];
  const course = courses.find(c => c.id === courseId) || courses[0];
  const subject = subjects.find(s => s.id === subjectId) || subjects[1]; // SQL fallback
  
  const seriesTests = tests.filter(t => t.seriesId === series.id);

  const breadcrumbs = [
    { label: 'All Courses', path: '/' },
    { label: course.title, path: `/courses/${course.id}` },
    { label: subject.title, path: `/test-series/${course.id}/${subject.id}` }
  ];

  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <Breadcrumb items={breadcrumbs} />
        
        <div className={styles.pageHeader}>
          <h1 className={styles.title}>{series.title}</h1>
          <p className={styles.description}>{series.description}</p>
          
          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <FileText size={18} className={styles.statIcon} />
              <div>
                <strong>{series.stats.totalTests}</strong>
                <span>Tests</span>
              </div>
            </div>
            <div className={styles.statBox}>
              <HelpCircle size={18} className={styles.statIcon} />
              <div>
                <strong>{series.stats.totalQuestions}</strong>
                <span>Questions</span>
              </div>
            </div>
            <div className={styles.statBox}>
              <TrendingUp size={18} className={styles.statIcon} />
              <div>
                <strong>{series.stats.difficulty}</strong>
                <span>Level</span>
              </div>
            </div>
            <div className={styles.statBox}>
              <Calendar size={18} className={styles.statIcon} />
              <div>
                <strong>{series.stats.updatedDate}</strong>
                <span>Updated</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.mainLayout}>
          <div className={styles.leftColumn}>
            <div className={styles.testList}>
              {seriesTests.map(test => (
                <TestRow key={test.id} test={test} courseIdOverride={courseId} subjectIdOverride={subjectId} />
              ))}
            </div>
          </div>
          
          <div className={styles.rightColumn}>
            <div className={styles.aboutCard}>
              <h3 className={styles.aboutTitle}>About This Series</h3>
              <p className={styles.aboutDesc}>{series.about.description}</p>
              
              <div className={styles.listSection}>
                <h4><CheckCircle2 size={16} /> Skills Covered</h4>
                <ul>
                  {series.about.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.listSection}>
                <h4><UsersIcon size={16} /> Ideal For</h4>
                <ul>
                  {series.about.idealFor.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Quick inline icon component to save an import if missed
const UsersIcon = ({size}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

export default TestSeries;
