import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './MyAttempts.module.css';
import { attempts } from '../data/attempts';

const MyAttempts = () => {
  const [filterCourse, setFilterCourse] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // In a real app, we would also merge the live attempt saved in localStorage 
  // for UC-DA-SQL-01 with this mock data. Keeping it simple with mock data for UI demo.

  const filteredAttempts = attempts.filter(att => {
    if (filterCourse !== 'all' && att.courseTitle !== filterCourse) return false;
    if (filterStatus !== 'all' && att.status !== filterStatus) return false;
    return true;
  });

  return (
    <div className={styles.pageContainer}>
      <div className={`container ${styles.layout}`}>
        
        <div className={styles.header}>
          <h1 className={styles.title}>My Attempts</h1>
          <p className={styles.subtitle}>Track your performance across all mock tests.</p>
        </div>

        <div className={styles.filtersRow}>
          <div className={styles.filterGroup}>
            <select 
              className={styles.selectBox} 
              value={filterCourse}
              aria-label="Filter by course" 
              onChange={(e) => setFilterCourse(e.target.value)}
            >
              <option value="all">All Courses</option>
              <option value="Data Analytics">Data Analytics</option>
              <option value="Data Science">Data Science</option>
            </select>
            
            <select 
              className={styles.selectBox}
              value={filterStatus}
              aria-label="Filter by status" 
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="PASS">Passed</option>
              <option value="FAIL">Failed</option>
            </select>
          </div>
          
          <div className={styles.sortGroup}>
            <select className={styles.selectBox} aria-label="Sort attempts">
              <option value="recent">Sort by: Recent</option>
              <option value="oldest">Sort by: Oldest</option>
              <option value="score_high">Score: High to Low</option>
            </select>
          </div>
        </div>

        <div className={styles.tableContainer}>
          <table className={styles.attemptsTable}>
            <thead>
              <tr>
                <th>Test</th>
                <th>Course</th>
                <th>Score</th>
                <th>Status</th>
                <th>Attempted On</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredAttempts.length === 0 ? (
                <tr>
                  <td colSpan="6" className={styles.emptyState}>No attempts found.</td>
                </tr>
              ) : (
                filteredAttempts.map(attempt => (
                  <tr key={attempt.id}>
                    <td className={styles.testTitleCol}>
                      <strong>{attempt.testTitle}</strong>
                      <span className={styles.mobileLabel}>{attempt.testId}</span>
                    </td>
                    <td className={styles.courseCol}>{attempt.courseTitle}</td>
                    <td className={styles.scoreCol}>
                      <strong>{attempt.scorePercent}%</strong>
                    </td>
                    <td className={styles.statusCol}>
                      <span className={`${styles.statusBadge} ${attempt.status === 'PASS' ? styles.pass : styles.fail}`}>
                        {attempt.status === 'PASS' ? 'Passed' : 'Failed'}
                      </span>
                    </td>
                    <td className={styles.dateCol}>{attempt.attemptedOn}</td>
                    <td className={styles.actionCol}>
                      <Link to={`/result/${attempt.testId}`} className={styles.viewResultBtn}>
                        View Result
                      </Link>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className={styles.pagination}>
          <button className={styles.pageBtn} disabled aria-label="Previous Page"><ChevronLeft size={16}/></button>
          <button className={`${styles.pageBtn} ${styles.activePage}`}>1</button>
          <button className={styles.pageBtn}>2</button>
          <button className={styles.pageBtn}>3</button>
          <span className={styles.pageEllipsis}>...</span>
          <button className={styles.pageBtn}>5</button>
          <button className={styles.pageBtn} aria-label="Next Page"><ChevronRight size={16}/></button>
        </div>

      </div>
    </div>
  );
};

export default MyAttempts;
