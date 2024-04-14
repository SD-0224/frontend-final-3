import { RightChevron } from "../../../icons";
import styles from "./TabButton.module.css";
import Tab from "@mui/material/Tab";

export function TabButton({ index, option, value, handleChange, ...props }) {
  const handleTabClick = () => {
    handleChange(null, index);
  };

  return (
    <Tab
      key={index}
      onClick={handleTabClick}
      className="MuiTab-fullWidth"
      style={{
        maxWidth: "none",
      }}
      sx={{
        padding: "24px 10px",
      }}
      label={
        <div
          className={styles.tabLabel}
          style={{
            color: value === index ? "#1B4B66" : "#13101E",
          }}
        >
          <span>{option}</span>
          <RightChevron borderColor={value === index ? "#1B4B66" : "#13101E"} />
        </div>
      }
      {...props}
    />
  );
}
