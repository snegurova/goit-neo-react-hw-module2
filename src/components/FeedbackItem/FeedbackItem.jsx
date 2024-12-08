import styles from './FeedbackItem.module.css';

const FeedbackItem = ({ title, value }) => {
  return (
    <li className={styles.item}>
      {title}: {value}
    </li>
  );
};

export default FeedbackItem;
