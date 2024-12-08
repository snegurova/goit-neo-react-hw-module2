import styles from './Description.module.css'

const Description = ({ title, description }) => {
  return (
    <div className={styles.description}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Description;
