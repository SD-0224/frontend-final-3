import styles from "./HandpickedCard.module.css";
import { ProductImage } from "../../../../../../components/product-image";

export const HandpickedCard = function ({
  image,
  text,
  width,
  height,
  borderRadius = "16px",
}) {
  return (
    <div className={styles.handpickedCard}>
      <ProductImage {...{ width, height, borderRadius }} src={image} />
      <div className={styles.overlay} style={{ borderRadius }}>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
