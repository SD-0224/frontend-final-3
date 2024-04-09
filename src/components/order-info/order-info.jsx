import styles from "./order-info.module.css";

export function OrderInfo({ title, orderInfo }) {
  const lastRowFontWeight = (index) => {
    return index === orderInfo.length - 1 ? styles.bold : "";
  };

  const lastRowFontColor = (index) => {
    return index === orderInfo.length - 1 ? styles.darkFont : styles.lightFont;
  };
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <hr className={styles.seperator} />

      {orderInfo.map(([detail, amount], index) => (
        <div
          key={index}
          className={`${styles.tableContainer} ${lastRowFontWeight(index)}`}
        >
          <div className={`${lastRowFontColor(index)}`}>{detail}</div>
          <div className={styles.darkFont}>{amount}</div>
        </div>
      ))}
    </>
  );
}
