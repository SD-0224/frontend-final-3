import styles from "./ProductImage.module.css";

export const ProductImage = function ({
  src,
  borderRadius = "8px",
  width = "280px",
  height = width,
  maxWidth,
  backgroundColor,
  objectFit = "cover",
}) {
  return (
    <div
      style={{
        width,
        height,
        flexShrink: 0,
        maxWidth,
        backgroundColor,
        borderRadius,
      }}
    >
      <img
        {...{ src }}
        className={styles.productImage}
        style={{ borderRadius, objectFit }}
      />
    </div>
  );
};
