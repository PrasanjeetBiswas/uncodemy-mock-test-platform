import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import styles from './TestRow.module.css';

const TestRow = ({ test, courseIdOverride, subjectIdOverride }) => {
  return (
    <div className={styles.testRow}>
      <div className={styles.iconArea}>
        <div className={styles.iconWrapper}>
          <CheckCircle size={20} className={styles.icon} />
        </div>
      </div>
      
      <div className={styles.contentArea}>
        <h3 className={styles.title}>{test.title}</h3>
        <div className={styles.metaList}>
          <span className={styles.metaItem}>
            <FileText size={14} /> {test.questionsCount} Questions
          </span>
          <span className={styles.metaItem}>
            <Clock size={14} /> {test.durationMinutes} Min
          </span>
          <span className={styles.metaItem}>
            <AlertCircle size={14} /> {test.negativeMarking}
          </span>
        </div>
      </div>
      
      <div className={styles.actionArea}>
        {test.isPopular && <span className={styles.popularBadge}>Most Popular</span>}
        <Link to={`/test-series/${courseIdOverride || test.courseId}/${subjectIdOverride || test.seriesId}/${test.id}`} className={styles.viewBtn}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default TestRow;
