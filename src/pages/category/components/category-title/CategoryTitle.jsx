import styles from "./CategoryTitle.module.css";

export const CategoryTitle = function ({ children }) {
  return <h1 className={styles.categoryTitle}>{children}</h1>;
};
