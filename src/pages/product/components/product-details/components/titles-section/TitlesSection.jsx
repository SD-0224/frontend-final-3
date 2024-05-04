import { ProductTitles } from "../../../../../../components/product-titles";

const titleStyle = {
  lineHeight: "44px",
  fontWeight: "var(--semi-bold-font-weight)",
  fontSize: "34px",
};

const subtitleStyle = {
  lineHeight: "26px",
  fontWeight: "var(--semi-bold-font-weight)",
  fontSize: "20px",
};

const titlesStyles = {
  gap: "0px",
  titleStyle,
  subtitleStyle,
};

export const TitlesSection = function ({ title, longSubtitle }) {
  return (
    <ProductTitles
      {...{
        title,
        subtitle: longSubtitle,
        ...titlesStyles,
      }}
    />
  );
};
