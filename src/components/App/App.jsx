import { useEffect, useState } from 'react';
import Description from '../Description/Description';
import styles from './App.module.css';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';

function App() {
  const defaultFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedback, setFeedback] = useState(() => {
    return JSON.parse(localStorage.getItem('feedback')) ?? defaultFeedback;
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback(defaultFeedback);
  };

  const feedbackTypes = Object.keys(feedback);
  const totalFeedback = feedbackTypes.reduce((total, feedbackType) => {
    return (total += feedback[feedbackType]);
  }, 0);
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  return (
    <div className={styles.appWrapper}>
      <Description
        title="Sip Happens Café"
        description="Please leave your feedback about our service by selecting one of the options below."
      />
      <Options
        updateFeedback={updateFeedback}
        feedbackTypes={feedbackTypes}
        isResetButton={!!totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          feedbackTypes={feedbackTypes}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
