import FeedbackItem from '../FeedbackItem/FeedbackItem';

const Feedback = ({
  feedback,
  feedbackTypes,
  totalFeedback,
  positiveFeedback,
}) => {
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
