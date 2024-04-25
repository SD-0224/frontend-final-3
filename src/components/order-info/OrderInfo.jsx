import styles from "./OrderInfo.module.css";
import { Box, Divider } from "@mui/material";
export function OrderInfo({ title, orderInfo, isTitleSmall = false }) {
  const getRowFontWeight = (index) => {
    return index === orderInfo.length - 1 ? styles.bold : "";
  };

  const getRowFontColor = (index) => {
    return index === orderInfo.length - 1 ? styles.darkFont : styles.lightFont;
  };
  return (
    <Box>
      <h1 className={`${styles.title} ${isTitleSmall ? styles.small : null}`}>
        {title}
      </h1>
      {!isTitleSmall && <Divider sx={{ marginBottom: "30px" }} />}
      {orderInfo?.map(([detail, amount], index) => (
        <div
          key={index}
          className={`${styles.tableContainer} ${getRowFontWeight(index)}`}
        >
          <div className={`${getRowFontColor(index)}`}>{detail}</div>
          <div className={styles.darkFont}>{amount}</div>
        </div>
      ))}
    </Box>
  );
}
