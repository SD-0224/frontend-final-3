import styles from "./ProductTitles.module.css";

export const ProductTitles = function ({
  title,
  subtitle,
  titleStyle,
  subtitleStyle,
  gap = "8px",
  ...props
}) {
  return (
    <div {...props}>
      <p className={styles.title} style={titleStyle}>
        {title}
      </p>
      <p
        className={styles.subtitle}
        style={{ ...subtitleStyle, marginTop: gap }}
      >
        {subtitle}
      </p>
    </div>
  );
};
