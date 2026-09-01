import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShieldCheck, CreditCard, Smartphone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import styles from './UnlockTest.module.css';
import { tests } from '../data/tests';

const UnlockTest = () => {
  const { courseId, subjectId, testId } = useParams();
  const navigate = useNavigate();
  const test = tests.find(t => t.id === testId) || tests[0];

  const [paymentState, setPaymentState] = useState('idle'); // idle, processing, success

  // In a real app, we'd check if they already bought it.

  const handleDemoPayment = () => {
    setPaymentState('processing');
    
    // Simulate API call / Payment gateway delay
    setTimeout(() => {
      setPaymentState('success');
      
      // Auto redirect to the test engine after showing success for 2 seconds
      setTimeout(() => {
        navigate(`/test/${test.id}`);
      }, 2000);
      
    }, 1500);
  };

  if (paymentState === 'processing' || paymentState === 'success') {
    return (
      <div className={styles.fullScreenOverlay}>
        <div className={styles.processingCard}>
          {paymentState === 'processing' ? (
            <>
              <Loader2 size={48} className={styles.spinner} />
              <h2>Processing Demo Payment</h2>
              <p>Please wait, simulating secure transaction...</p>
            </>
          ) : (
            <>
              <CheckCircle size={56} className={styles.successIcon} />
              <h2>Payment Successful!</h2>
              <p>Test Unlocked. Redirecting you to the exam environment...</p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContainer}>
      <div className={`container ${styles.layout}`}>
        
        {/* Left Side: What they are getting */}
        <div className={styles.leftSide}>
          <div className={styles.backBtn} onClick={() => navigate(-1)} role="button" tabIndex={0} onKeyDown={(e) => { if(e.key === 'Enter' || e.key === ' ') navigate(-1); }} aria-label="Go Back">
            &larr; Back to Test Details
          </div>
          
          <h1 className={styles.mainTitle}>About to Unlock</h1>
          
          <div className={styles.summaryCard}>
            <div className={styles.testBadge}>{test.code}</div>
            <h2>{test.title}</h2>
            
            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <CheckCircle size={18} className={styles.checkIcon} />
                <span><strong>{test.questionsCount}</strong> High-Quality Questions</span>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle size={18} className={styles.checkIcon} />
                <span><strong>{test.durationMinutes}</strong> Minutes Duration</span>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle size={18} className={styles.checkIcon} />
                <span>Detailed Performance Analytics</span>
              </div>
              <div className={styles.benefitItem}>
                <CheckCircle size={18} className={styles.checkIcon} />
                <span>Topic-wise Answer Review</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Demo Payment Details */}
        <div className={styles.rightSide}>
          <div className={styles.checkoutCard}>
            <div className={styles.checkoutHeader}>
              <h3>Price Details</h3>
              <ShieldCheck size={24} className={styles.secureIcon} />
            </div>

            <div className={styles.priceRow}>
              <span>Test Price</span>
              <span>₹{test.price}</span>
            </div>
            <div className={styles.priceRow}>
              <span>Taxes (Demo)</span>
              <span>₹0</span>
            </div>
            
            <div className={styles.totalRow}>
              <span>Total Amount</span>
              <span>₹{test.price}</span>
            </div>

            <div className={styles.paymentMethods}>
              <h4>Select Payment Method</h4>
              <div className={styles.methodGrid}>
                <div className={`${styles.methodBox} ${styles.active}`}>
                  <Smartphone size={20} />
                  <span>UPI / QR</span>
                </div>
                <div className={styles.methodBox}>
                  <CreditCard size={20} />
                  <span>Card</span>
                </div>
                <div className={styles.methodBox}>
                  <ShieldCheck size={20} />
                  <span>Net Banking</span>
                </div>
              </div>
            </div>

            <div className={styles.demoWarning}>
              <AlertCircle size={20} />
              <p>This is a frontend demo payment. No real transaction will be processed. No real money will be deducted.</p>
            </div>

            <button onClick={handleDemoPayment} className={styles.payBtn}>
              Pay ₹{test.price} & Unlock &rarr;
            </button>
            <div className={styles.safeText}>
              Secure & Safe Checkout (Demo)
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UnlockTest;
