import styles from "./Review.module.css";
import { StarsRating } from "../../../../../../../../components/stars-rating";

export const Review = function ({ rating, content }) {
  return (
    <div className={styles.reviewContainer}>
      <h2>{content}</h2>
      <StarsRating {...{ rating }} />
    </div>
  );
};
