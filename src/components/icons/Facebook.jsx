export const Facebook = function ({
  width = 14,
  height = 27,
  borderColor = "#13101E",
  borderSize = 2,
  fillColor = "none",
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
        d="M0.508785 14.7084H3.34884V26.4004C3.34884 26.6312 3.53589 26.8183 3.76673 26.8183H8.58214C8.81298 26.8183 9.00003 26.6312 9.00003 26.4004V14.7634H12.2649C12.4772 14.7634 12.6558 14.6041 12.68 14.3933L13.1759 10.0889C13.1895 9.97042 13.152 9.85183 13.0728 9.76298C12.9935 9.67406 12.88 9.62316 12.7609 9.62316H9.0002V6.92494C9.0002 6.11156 9.43814 5.6991 10.302 5.6991C10.4251 5.6991 12.7609 5.6991 12.7609 5.6991C12.9917 5.6991 13.1787 5.51197 13.1787 5.28121V1.33016C13.1787 1.09932 12.9917 0.912272 12.7609 0.912272H9.3722C9.3483 0.911102 9.29523 0.90918 9.217 0.90918C8.62903 0.90918 6.5853 1.0246 4.97091 2.50978C3.18218 4.15559 3.43083 6.12618 3.49025 6.46785V9.62308H0.508785C0.277944 9.62308 0.0908966 9.81012 0.0908966 10.041V14.2904C0.0908966 14.5212 0.277944 14.7084 0.508785 14.7084Z"
        stroke={borderColor}
        stroke-width={borderSize}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
