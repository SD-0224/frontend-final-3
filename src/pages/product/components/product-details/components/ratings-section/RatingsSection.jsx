import styles from "./RatingsSection.module.css";
import { reviewsToRating } from "../../../../../../modules/rating";
import { StarsRating } from "../../../../../../components/stars-rating";

const ratingStyles = {
  emptyColor: "var(--light-text-color)",
  gap: "8px",
};

export const RatingsSection = function ({ reviews }) {
  const hasReviews = reviews?.length > 0;
  const rating = reviewsToRating(reviews);

  return (
    <div className={styles.ratingsContainer}>
      <StarsRating {...{ rating, ...ratingStyles }} />
      {hasReviews && (
        <p className={styles.ratingsCount}>({reviews?.length}) Ratings</p>
      )}
    </div>
  );
};
