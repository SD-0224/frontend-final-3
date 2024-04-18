import { Star } from "../icons/Star";

export const StarsRating = function ({
  rating = 0,
  starsNumber = 5,
  fullColor = "var(--highlight)",
  emptyColor = "var(--grey)",
  starHeight = 24,
  starWidth = 24,
  gap = 0,
  height = starHeight,
  ...props
}) {
  const rangeArray = [...Array(starsNumber).keys()];

  return (
    <div
      style={{ display: "flex", width: "fit-content", height, gap }}
      {...props}
    >
      {rangeArray.map((idx) => {
        const starIdx = idx + 1;
        const isFullStar = starIdx <= rating;

        return (
          <Star
            key={idx}
            {...{
              height: starHeight,
              width: starWidth,
              fillColor: isFullStar ? fullColor : emptyColor,
            }}
          />
        );
      })}
    </div>
  );
};
