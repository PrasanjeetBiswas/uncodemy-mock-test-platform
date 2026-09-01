import React from 'react';
import { Link } from 'react-router-dom';
import { FileSpreadsheet, Database, BarChart, TerminalSquare, LineChart, PieChart, Briefcase, Layers, BrainCircuit, Cpu, CheckCircle, Code, Globe, Layout, Server, Search, Share2, TrendingUp, PlaySquare, Settings, Coffee, List, GraduationCap, MessageSquare, Book } from 'lucide-react';
import styles from './SubjectCard.module.css';

const iconMap = {
  FileSpreadsheet, Database, BarChart, TerminalSquare, LineChart, PieChart, Briefcase, Layers, BrainCircuit, Cpu, CheckCircle, Code, Globe, Layout, Server, Search, Share2, TrendingUp, PlaySquare, Settings, Coffee, List, GraduationCap, MessageSquare, Book
};

const SubjectCard = ({ subject }) => {
  const IconComponent = iconMap[subject.icon] || iconMap.Book;

  return (
    <Link to={`/test-series/${subject.courseId}/${subject.id}`} className={styles.card}>
      <div className={styles.iconWrapper} style={{ color: subject.color }}>
        <IconComponent size={24} />
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{subject.title}</h4>
        <p className={styles.meta}>{subject.testsCount} Tests</p>
      </div>
    </Link>
  );
};

export default SubjectCard;
