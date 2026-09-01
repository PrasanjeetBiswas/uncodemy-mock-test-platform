import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import styles from './Breadcrumb.module.css';

const Breadcrumb = ({ items }) => {
  return (
    <nav className={styles.breadcrumb}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {isLast ? (
              <span className={styles.current}>{item.label}</span>
            ) : (
              <Link to={item.path} className={styles.link}>
                {item.label}
              </Link>
            )}
            {!isLast && <ChevronRight size={14} className={styles.separator} />}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
