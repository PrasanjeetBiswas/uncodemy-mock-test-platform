import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useExam = (testData, questionsData) => {
  const navigate = useNavigate();
  
  // State
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // { qId: selectedOptionIndex }
  const [markedForReview, setMarkedForReview] = useState({}); // { qId: boolean }
  const [visited, setVisited] = useState({ [questionsData[0]?.id]: true }); // { qId: boolean }
  
  // Timer state
  const totalSeconds = (testData?.durationMinutes || 60) * 60;
  const [remainingSeconds, setRemainingSeconds] = useState(totalSeconds);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Timer effect
  useEffect(() => {
    if (isSubmitted || remainingSeconds <= 0) return;

    const timer = setInterval(() => {
      setRemainingSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isSubmitted, remainingSeconds]);

  const handleAutoSubmit = useCallback(() => {
    if (!isSubmitted) {
      alert('Time is up! Your test is being auto-submitted.');
      submitExam();
    }
  }, [isSubmitted]);

  // Actions
  const goToQuestion = (index) => {
    if (index >= 0 && index < questionsData.length) {
      setCurrentQuestionIndex(index);
      setVisited(prev => ({ ...prev, [questionsData[index].id]: true }));
    }
  };

  const nextQuestion = () => goToQuestion(currentQuestionIndex + 1);
  const prevQuestion = () => goToQuestion(currentQuestionIndex - 1);

  const selectAnswer = (questionId, optionIndex) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const clearAnswer = (questionId) => {
    setAnswers(prev => {
      const newAnswers = { ...prev };
      delete newAnswers[questionId];
      return newAnswers;
    });
  };

  const toggleReview = (questionId) => {
    setMarkedForReview(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const submitExam = () => {
    setIsSubmitted(true);
    
    // In a real app, send to backend. Here we save to localStorage and navigate.
    const resultData = {
      testId: testData.id,
      answers,
      markedForReview,
      timeTakenSeconds: totalSeconds - remainingSeconds,
      submittedAt: new Date().toISOString()
    };
    
    localStorage.setItem(`result_${testData.id}`, JSON.stringify(resultData));
    
    navigate(`/result/${testData.id}`);
  };

  return {
    currentQuestionIndex,
    currentQuestion: questionsData[currentQuestionIndex],
    totalQuestions: questionsData.length,
    answers,
    markedForReview,
    visited,
    remainingSeconds,
    goToQuestion,
    nextQuestion,
    prevQuestion,
    selectAnswer,
    clearAnswer,
    toggleReview,
    submitExam
  };
};
