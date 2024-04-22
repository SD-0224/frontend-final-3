export const Star = function ({
  width = 24,
  height = 24,
  fillColor = "var(--highlight)",
  borderSize = 2,
  borderColor = fillColor,
  ...props
}) {
  return (
    <svg
      {...{ width, height }}
      {...props}
      viewBox={`0 0 ${width} ${height}`}
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4135 17.8812L17.1419 20.8769C17.7463 21.2598 18.4967 20.6903 18.3173 19.9847L16.9512 14.6108C16.9127 14.4611 16.9173 14.3036 16.9643 14.1564C17.0114 14.0092 17.0991 13.8783 17.2172 13.7787L21.4573 10.2496C22.0144 9.78588 21.7269 8.86126 21.0111 8.81481L15.4738 8.45544C15.3247 8.44479 15.1816 8.39198 15.0613 8.30317C14.941 8.21437 14.8484 8.09321 14.7943 7.95382L12.7292 2.75323C12.673 2.60528 12.5732 2.4779 12.443 2.38802C12.3127 2.29814 12.1582 2.25 12 2.25C11.8418 2.25 11.6873 2.29814 11.557 2.38802C11.4268 2.4779 11.327 2.60528 11.2708 2.75323L9.20568 7.95382C9.15157 8.09321 9.05897 8.21437 8.93868 8.30317C8.81838 8.39198 8.67533 8.44479 8.52618 8.45544L2.98894 8.81481C2.27315 8.86126 1.9856 9.78588 2.54272 10.2496L6.78278 13.7787C6.90095 13.8783 6.9886 14.0092 7.03566 14.1564C7.08272 14.3036 7.08727 14.4611 7.0488 14.6108L5.78188 19.5945C5.56667 20.4412 6.46715 21.1246 7.19243 20.6651L11.5865 17.8812C11.71 17.8025 11.8535 17.7607 12 17.7607C12.1465 17.7607 12.29 17.8025 12.4135 17.8812V17.8812Z"
        fill={fillColor}
        stroke={borderColor}
        strokeWidth={borderSize}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
