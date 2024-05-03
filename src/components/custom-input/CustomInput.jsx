import { useState } from "react";
import styles from "./CustomInput.module.css";

export const CustomInput = ({
  label,
  id,
  type,
  placeholder,
  value: propValue,
  onChange: propOnChange,
  icon,
  required,
  borderRadius = "8px",
  border = "0",
  isGrey = false,
  ...props
}) => {
  // Use useState hook to manage internal state of the input value
  const [value, setValue] = useState(propValue);

  // Handler function to update internal state and call onChange prop
  const handleChange = (e) => {
    setValue(e.target.value);
    // Call the onChange prop if provided
    if (propOnChange) {
      propOnChange(e);
    }
  };
  return (
    <div className={styles.inputWrapp} {...props}>
      {label && (
        <label htmlFor={id} className={styles.inputLabel}>
          {label}
        </label>
      )}
      <div
        className={styles.inputContainer}
        style={{
          borderRadius,
          border,
        }}
      >
        {icon && <>{icon}</>}
        <input
          className={isGrey ? styles.grey : null}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange} // Use the internal handleChange function
          required={required}
        />
      </div>
    </div>
  );
};