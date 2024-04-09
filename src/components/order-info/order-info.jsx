import styles from "./order-info.module.css";

export function OrderInfo({ title, orderInfo }) {
  const getRowFontWeight = (index) => {
    return index === orderInfo.length - 1 ? styles.bold : "";
  };

  const getRowFontColor = (index) => {
    return index === orderInfo.length - 1 ? styles.darkFont : styles.lightFont;
  };
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <hr className={styles.seperator} />

      {orderInfo.map(([detail, amount], index) => (
        <div
          key={index}
          className={`${styles.tableContainer} ${getRowFontWeight(index)}`}
        >
          <div className={`${getRowFontColor(index)}`}>{detail}</div>
          <div className={styles.darkFont}>{amount}</div>
        </div>
      ))}
    </>
  );
}
