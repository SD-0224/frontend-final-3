import styles from "./DescriptionPanel.module.css";

export const DescriptionPanel = function ({ description }) {
  return <p className={styles.panel}>{description}</p>;
};
