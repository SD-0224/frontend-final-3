import styles from "./CustomRadioButton.module.css";

export function CustomRadioButton({
  name = "radio",
  title,
  handleChange,
  className,
}) {
  return (
    <input
      type="radio"
      name={name}
      value={title}
      onChange={handleChange}
      className={className}
    ></input>
  );
}
