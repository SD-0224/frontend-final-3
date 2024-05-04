import styles from "./BottomGallery.module.css";
import { ProductImage } from "../../../../components/product-image";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export const BottomGallery = function ({ imagesUrls, ...props }) {
  return (
    <div className={styles.container} {...props}>
      <ChevronLeft width="24px" />
      <div className={styles.imagesContainer}>
        {imagesUrls?.map((url, idx) => (
          <ProductImage key={idx} src={url} width="75px" />
        ))}
      </div>
      <ChevronRight width="24px" />
    </div>
  );
};
