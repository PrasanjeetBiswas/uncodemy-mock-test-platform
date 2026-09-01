import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart, BrainCircuit, CheckCircle, Code, TrendingUp, PlaySquare, Coffee, Cpu, Layers, BookOpen, TerminalSquare } from 'lucide-react';
import styles from './CourseCard.module.css';

const iconMap = {
  BarChart,
  BrainCircuit,
  CheckCircle,
  Code,
  TrendingUp,
  PlaySquare,
  Coffee,
  Cpu,
  Layers,
  BookOpen,
  TerminalSquare
};

const CourseCard = ({ course }) => {
  // Dynamically get the icon component from our map
  const IconComponent = iconMap[course.icon] || iconMap.BookOpen;

  return (
    <div className={`${styles.card} ${course.priority === 'primary' ? styles.primaryCard : ''}`}>
      {course.popular && <div className={styles.popularBadge}>Most Popular</div>}
      
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          <IconComponent size={24} className={styles.icon} />
        </div>
        <h3 className={styles.title}>{course.title}</h3>
      </div>
      
      <p className={styles.description}>{course.description}</p>
      
      <div className={styles.statsGrid}>
        <div className={styles.stat}>
          <span className={styles.statValue}>{course.stats.tests}</span>
          <span className={styles.statLabel}>Tests</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>{course.stats.questions}</span>
          <span className={styles.statLabel}>Questions</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>{course.stats.level}</span>
          <span className={styles.statLabel}>Level</span>
        </div>
      </div>
      
      <Link to={`/courses/${course.id}`} className={styles.ctaButton}>
        Explore Tests &rarr;
      </Link>
    </div>
  );
};

export default CourseCard;
