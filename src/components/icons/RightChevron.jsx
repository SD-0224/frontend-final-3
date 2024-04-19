export const RightChevron = function ({
  width = 24,
  height = 24,
  borderColor = "var(--dark)",
  borderSize = 2,
  fillColor = "none",
  ...props
}) {
  return (
    <svg
      {...{ width, height }}
      {...props}
      viewBox="0 0 24 24"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 4.5L16.5 12L9 19.5"
        stroke={borderColor}
        strokeWidth={borderSize}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
