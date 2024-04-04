import styles from "./ProductImage.module.css";

export const ProductImage = function ({
  src,
  borderRadius = "8px",
  width = "280px",
  height = width,
}) {
  return (
    <div style={{ width, height }}>
      <img
        {...{ src }}
        className={styles.productImage}
        style={{ borderRadius }}
      />
    </div>
  );
};
