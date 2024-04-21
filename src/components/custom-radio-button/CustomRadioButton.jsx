import styles from "./CustomRadioButton.module.css";

export function CustomRadioButton({ name = "radio", title, handleChange }) {
  return (
    <input
      type="radio"
      name={name}
      value={title}
      onChange={handleChange}
      className={styles.input}
    ></input>
  );
}
