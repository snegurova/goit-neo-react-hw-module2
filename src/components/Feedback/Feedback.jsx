import FeedbackItem from '../FeedbackItem/FeedbackItem';

const Feedback = ({ feedback, feedbackTypes, totalFeedback }) => {
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  return (
    <ul>
      {feedbackTypes.map((feedbackType) => {
        return (
          <FeedbackItem
            key={feedbackType}
            title={feedbackType}
            value={feedback[feedbackType]}
          />
        );
      })}
      <FeedbackItem title={'Total'} value={totalFeedback} />
      <FeedbackItem title={'Positive'} value={`${positiveFeedback}%`} />
    </ul>
  );
};

export default Feedback;
