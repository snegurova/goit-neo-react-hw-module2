import clsx from 'clsx';
import styles from './Options.module.css';

const Options = ({
  updateFeedback,
  feedbackTypes,
  isResetButton,
  resetFeedback,
}) => {
  return (
    <ul className={styles.options}>
      {feedbackTypes.map((feedbackType) => (
        <li key={feedbackType}>
          <button
            className={styles.button}
            onClick={() => updateFeedback(feedbackType)}
          >
            {feedbackType}
          </button>
        </li>
      ))}
      {isResetButton && (
        <li>
          <button
            className={clsx(styles.button, styles.reset)}
            onClick={resetFeedback}
          >
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
