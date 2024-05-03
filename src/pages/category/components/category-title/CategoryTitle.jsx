import { capitalize } from "@mui/material";
import styles from "./CategoryTitle.module.css";

export const CategoryTitle = function ({ children }) {
  return <h1 className={styles.categoryTitle}>{capitalize(children)}</h1>;
};
