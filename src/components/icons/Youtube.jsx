export const Youtube = function ({
  width = 25,
  height = 18,
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
        fill-rule="evenodd" 
        clip-rule="evenodd"
        d="M23.2656 1.68591C23.6473 2.06889 23.9223 2.54551 24.0633 3.06832C24.8751 6.34729 24.6875 11.5259 24.0791 14.9315C23.9381 15.4543 23.6631 15.9309 23.2814 16.3139C22.8997 16.6968 22.4247 16.9728 21.9037 17.1143C19.9964 17.6363 12.3196 17.6363 12.3196 17.6363C12.3196 17.6363 4.64287 17.6363 2.73551 17.1143C2.21449 16.9728 1.7395 16.6968 1.35784 16.3139C0.976173 15.9309 0.701155 15.4543 0.56017 14.9315C-0.256371 11.6667 -0.0325317 6.4849 0.544406 3.08414C0.685391 2.56133 0.96041 2.08471 1.34207 1.70173C1.72374 1.31875 2.19873 1.04279 2.71975 0.901321C4.62711 0.379343 12.3039 0.363525 12.3039 0.363525C12.3039 0.363525 19.9806 0.363525 21.888 0.885503C22.409 1.02697 22.884 1.30294 23.2656 1.68591ZM16.0032 8.99988L9.8584 12.7012V5.29858L16.0032 8.99988Z"
        stroke={borderColor}
        stroke-width={borderSize}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
