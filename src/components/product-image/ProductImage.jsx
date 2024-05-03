import styles from "./ProductImage.module.css";

export const ProductImage = function ({
  src,
  borderRadius = "8px",
  width = "280px",
  height = width,
  maxWidth,
}) {
  return (
    <div style={{ width, height, flexShrink: 0, maxWidth }}>
      <img
        {...{ src }}
        className={styles.productImage}
        style={{ borderRadius }}
      />
    </div>
  );
};
