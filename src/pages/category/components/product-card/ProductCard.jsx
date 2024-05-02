import styles from "./ProductCard.module.css";
import { ProductCardTop } from "../../../../components/product-card-top";
import { StarsRating } from "../../../../components/stars-rating";
import { DiscountDetails } from "../../../../components/discount-details";
import { reviewsToRating } from "../../../../modules/rating";
import { amountFromPricePercentage, toFixed } from "../../../../modules/price";

export const ProductCard = function ({
  reviews,
  price,
  discountPercentage = 0,
  ...props
}) {
  const hasReviews = reviews?.length > 0;
  const hasDiscount = discountPercentage > 0;

  const rating = reviewsToRating(reviews);

  const discountAmount = amountFromPricePercentage(price, discountPercentage);
  const priceAfterDiscount = price - discountAmount;
  const discountPrice = toFixed(priceAfterDiscount);

  return (
    <ProductCardTop {...props}>
      <div className={styles.ratingContainer}>
        <StarsRating {...{ rating }} />
        {hasReviews && (
          <p className={styles.ratingCount}>{reviews.length} Ratings</p>
        )}
      </div>
      <div className={styles.priceContainer}>
        <p className={styles.discountPrice}>${discountPrice}</p>
        {hasDiscount && <DiscountDetails {...{ price, discountPercentage }} />}
      </div>
    </ProductCardTop>
  );
};
