import styles from "./CustomInput.module.css";

export const CustomInput = ({
  label,
  id,
  type,
  placeholder,
  value,
  onChange,
  icon,
  required,
  borderRadius = "8px",
  border = "0",
  isGrey = false,
  ...props
}) => {
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
          onChange={onChange}
          required={required}
        />
      </div>
    </div>
  );
};