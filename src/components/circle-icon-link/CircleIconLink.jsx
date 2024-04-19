import styles from "./CircleIconLink.module.css";

export const CircleIconLink = ({
  link,
  icon,
  height = "38px",
  width = height,
  backgroundColor = "var(--primary-tint)",
  ...props
}) => {
  return (
    <a
      href={link}
      rel="noreferrer"
      className={styles.circleLink}
      style={{ height, width, backgroundColor }}
      target="_blank"
      {...props}
    >
      {icon}
    </a>
  );
};
