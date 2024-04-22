export const RightArrow = function ({
  width = 16,
  height = 11,
  borderColor = "var(--dark)",
  borderSize = 2,
  fillColor = "none",
  ...props
}) {
  return (
    <svg
      {...{ width, height }}
      {...props}
      viewBox="0 0 16 11"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5.49996H15M15 5.49996L10.5 1M15 5.49996L10.5 9.99996"
        stroke={borderColor}
        strokeWidth={borderSize}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
