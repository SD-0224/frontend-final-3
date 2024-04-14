export function reviewsToRating(reviews) {
  if (!reviews?.length) return 0;

  const totalRatings = reviews.reduce(
    (accum, review) => (accum += review?.rating ?? 0),
    0
  );
  const ratingsAverage = totalRatings / reviews.length;
  const rating = Math.round(ratingsAverage);

  return rating;
}
