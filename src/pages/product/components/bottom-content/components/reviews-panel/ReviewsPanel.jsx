import { HorizontalScroll } from "../../../../../../components/horizontal-scroll";
import { Review } from "./components/review/Review";

export const ReviewsPanel = function ({ reviews }) {
  return (
    <HorizontalScroll>
      {reviews?.map((review) => (
        <Review {...review} />
      ))}
    </HorizontalScroll>
  );
};
