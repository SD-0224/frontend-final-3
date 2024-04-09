import styles from "./order-info.module.css";

export function OrderInfo({ title, orderInfo }) {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      <hr className={styles.seperator} />

      {orderInfo.map(([detail, amount], index) => (
        <div
          key={index}
          className={`${styles.tableContainer} ${
            index === orderInfo.length - 1 ? styles.bold : ""
          }`}
        >
          <div
            className={
              index === orderInfo.length - 1
                ? styles.darkFont
                : styles.lightFont
            }
          >
            {detail}
          </div>
          <div className={styles.darkFont}>{amount}</div>
        </div>
      ))}
    </>
  );
}
