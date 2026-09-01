import { useSEO } from '../hooks/useSEO';
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, TrendingUp, Users, Award, PlaySquare, Briefcase } from 'lucide-react';
import styles from './CoursePage.module.css';
import Breadcrumb from '../components/common/Breadcrumb';
import SubjectCard from '../components/courses/SubjectCard';
import { courses } from '../data/courses';
import { subjects } from '../data/subjects';

const CoursePage = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId) || courses[0]; // fallback to first course for demo
  
  // Filter subjects for this course strictly
  const courseSubjects = subjects.filter(s => s.courseId === course.id);

  const breadcrumbs = [
    { label: 'All Courses', path: '/' },
    { label: course.title, path: `/courses/${course.id}` }
  ];

  return (
    <div className={styles.pageContainer}>
      <div className="container">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <div className={styles.courseHero}>
        <div className={`container ${styles.heroGrid}`}>
          {/* Left Side: Overview */}
          <div className={styles.heroLeft}>
            <h1 className={styles.title}>{course.title}</h1>
            <p className={styles.description}>{course.description}</p>
            
            <div className={styles.courseStats}>
              <div className={styles.stat}>
                <TrendingUp size={18} className={styles.statIcon} />
                <span>Beginner to Advanced</span>
              </div>
              <div className={styles.stat}>
                <Users size={18} className={styles.statIcon} />
                <span>90% Learners Recommend</span>
              </div>
            </div>

            <div className={styles.benefits}>
              <h3 className={styles.benefitsTitle}>About {course.title}</h3>
              <p className={styles.benefitsText}>
                Master the core concepts of {course.title} through practical, industry-focused mock tests designed by experts.
              </p>
              <ul className={styles.benefitList}>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Work on real-world test scenarios</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Improve problem-solving speed</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Industry-recognized curriculum</li>
                <li><CheckCircle2 size={16} className={styles.checkIcon}/> Job-ready assessment</li>
              </ul>
            </div>
          </div>

          {/* Right Side: Premium CTA Card */}
          <div className={styles.heroRight}>
            <div className={styles.premiumCard}>
              <div className={styles.cardHeader}>
                <Award size={32} color="var(--color-primary)" />
              </div>
              <h2 className={styles.cardTitle}>{course.title}</h2>
              <p className={styles.cardText}>
                Master in-demand {course.title.toLowerCase()} skills and advance your career.
              </p>
              
              <div className={styles.cardStats}>
                <div className={styles.cardStat}>
                  <strong>{course.stats.tests}</strong>
                  <span>Tests</span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.cardStat}>
                  <strong>{course.stats.questions}</strong>
                  <span>Questions</span>
                </div>
              </div>

              <Link to={`/test-series/${course.id}/${courseSubjects.length > 0 ? courseSubjects[0].id : 'sql'}`} className={styles.ctaButton}>
                Explore Test Series &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Topics / Categories Grid */}
      <div className="container">
        <section className={styles.topicsSection}>
          <h2 className={styles.sectionTitle}>Topics / Categories</h2>
          {courseSubjects.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--color-text-secondary)', background: 'var(--color-white)', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
              Topics for this course will be available soon.
            </div>
          ) : (
            <div className={styles.topicsGrid}>
              {courseSubjects.map(subject => (
                <SubjectCard key={subject.id} subject={subject} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default CoursePage;
