import { useSEO } from '../hooks/useSEO';
import React, { useState, useMemo } from 'react';
import { Search, Filter, BookOpen, Users, CheckCircle, Clock, BarChart2, TrendingUp, Target, Award, CheckCircle2, Trophy, FileText, ChevronRight } from 'lucide-react';
import styles from './AllTests.module.css';
import { courses } from '../data/courses';
import CourseCard from '../components/courses/CourseCard';

const AllTests = () => {
  useSEO({ title: "Home", description: "Explore comprehensive mock tests across Data Science, Full Stack, Software Testing, AI, and more." });

  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const filteredCourses = useMemo(() => {
    let result = [...courses];
    
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(c => 
        c.title.toLowerCase().includes(q) || 
        c.description.toLowerCase().includes(q)
      );
    }
    
    if (sortBy === 'popular') {
      result.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    }
    
    return result;
  }, [searchQuery, sortBy]);

  return (
    <div className={styles.pageContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroLeft}>
            <span className={styles.eyebrow}>Uncodemy Mock Tests</span>
            <h1 className={styles.mainHeading}>
              Practice Smarter.<br/><span className={styles.gradientText}>Perform Better.</span>
            </h1>
            <p className={styles.subHeading}>
              Industry-focused mock tests for every learner journey. Choose a course and start your assessment.
            </p>
            
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <div className={styles.statIcon}><BookOpen size={20} /></div>
                <div>
                  <div className={styles.statValue}>9</div>
                  <div className={styles.statLabel}>Courses</div>
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}><CheckCircle size={20} /></div>
                <div>
                  <div className={styles.statValue}>250+</div>
                  <div className={styles.statLabel}>Mock Tests</div>
                </div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statIcon}><Users size={20} /></div>
                <div>
                  <div className={styles.statValue}>15K+</div>
                  <div className={styles.statLabel}>Students</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.heroRight}>
            <div className={styles.heroVisual}>
              
              {/* Progress Card */}
              <div className={styles.progressCard}>
                <div className={styles.pcHeader}>
                  <h3>Your Progress</h3>
                  <a href="#" className={styles.pcViewAll}>View all <ChevronRight size={14} /></a>
                </div>
                
                <div className={styles.pcBody}>
                  {/* Circle Chart */}
                  <div className={styles.pcChart}>
                    <svg viewBox="0 0 100 100" className={styles.circularChart}>
                      <path className={styles.circleBg}
                        d="M50 10
                           a 40 40 0 0 1 0 80
                           a 40 40 0 0 1 0 -80"
                      />
                      <path className={styles.circleStroke}
                        strokeDasharray="251.2"
                        strokeDashoffset="40"
                        d="M50 10
                           a 40 40 0 0 1 0 80
                           a 40 40 0 0 1 0 -80"
                      />
                    </svg>
                    <div className={styles.chartText}>
                      <h2>84%</h2>
                      <p>Top Performer</p>
                    </div>
                  </div>

                  {/* Stats List */}
                  <div className={styles.pcStats}>
                    <div className={styles.pcStatRow}>
                      <div className={styles.pcStatLeft}>
                        <div className={styles.pcIconWrapper}><Target size={16} /></div>
                        <span>Tests Attempted</span>
                      </div>
                      <strong>32</strong>
                    </div>
                    <div className={styles.pcStatRow}>
                      <div className={styles.pcStatLeft}>
                        <div className={styles.pcIconWrapper}><CheckCircle2 size={16} /></div>
                        <span>Tests Passed</span>
                      </div>
                      <strong>27</strong>
                    </div>
                    <div className={styles.pcStatRow}>
                      <div className={styles.pcStatLeft}>
                        <div className={styles.pcIconWrapper}><Trophy size={16} /></div>
                        <span>Avg. Accuracy</span>
                      </div>
                      <strong>92%</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Test Card */}
              <div className={styles.recentTestCard}>
                <div className={styles.rtcLeft}>
                  <div className={styles.rtcIconWrapper}><FileText size={20} /></div>
                  <div className={styles.rtcInfo}>
                    <h4>Power BI Test 01</h4>
                    <p>Attempted on 20 May 2025</p>
                  </div>
                </div>
                <div className={styles.rtcRight}>
                  <span className={styles.rtcBadge}>Passed</span>
                  <span className={styles.rtcAccuracy}>Accuracy: <strong>92%</strong></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container">
        
        {/* Search & Filters */}
        <section className={styles.controlsSection}>
          <div className={styles.controlsRow}>
            <div className={styles.searchBox}>
              <Search size={18} color="var(--color-text-secondary)" />
              <input 
                type="text" 
                placeholder="Search for courses..." 
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className={styles.filterGroup}>
              <select className={styles.selectBox} defaultValue="all" aria-label="Filter by level">
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="advanced">Advanced</option>
              </select>
              
              <select className={styles.selectBox} defaultValue="all" aria-label="Filter by test type">
                <option value="all">All Test Types</option>
                <option value="mock">Full Mock Tests</option>
                <option value="topic">Topic Wise</option>
              </select>
              
              <select 
                className={styles.selectBox} 
                value={sortBy}
                aria-label="Sort courses"
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popular">Sort by: Popular</option>
                <option value="newest">Newest First</option>
              </select>
              
              <button className={styles.filterBtn}>
                <Filter size={16} /> Filters
              </button>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className={styles.coursesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{searchQuery ? 'Search Results' : 'Popular Courses'}</h2>
            <a href="#" className={styles.viewAllLink}>View All Courses &rarr;</a>
          </div>
          
          {filteredCourses.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--color-text-secondary)' }}>
              No courses found matching "{searchQuery}"
            </div>
          ) : (
            <div className={styles.coursesGrid}>
              {filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Bottom Feature Strip */}
      <section className={styles.featureStrip}>
        <div className={`container ${styles.featureGrid}`}>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><Clock size={24} /></div>
            <div className={styles.featureContent}>
              <h4>Real Exam Experience</h4>
              <p>Tests designed as per industry pattern with time limits.</p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><CheckCircle size={24} /></div>
            <div className={styles.featureContent}>
              <h4>Instant Results</h4>
              <p>Get instant results with detailed performance analysis.</p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><BarChart2 size={24} /></div>
            <div className={styles.featureContent}>
              <h4>Performance Tracking</h4>
              <p>Track your progress and identify your weak areas.</p>
            </div>
          </div>
          <div className={styles.featureItem}>
            <div className={styles.featureIcon}><TrendingUp size={24} /></div>
            <div className={styles.featureContent}>
              <h4>Learn & Improve</h4>
              <p>Learn from detailed solutions and improve your skills.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AllTests;
