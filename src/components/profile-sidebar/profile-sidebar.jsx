import React, { useMemo, useState } from "react";
import { Tabs, Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import { RightChevron } from "../icons";
import styles from "./profile-sidebar.module.css";

export function SideBar({ SidebarOptions }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const getFontColor = (index) => (value === index ? "#1B4B66" : "#13101E");

  const memoizedTabs = useMemo(() => {
    return SidebarOptions?.map((option, index) => (
      <Tab
        key={index}
        className={styles.tab}
        label={
          <div
            className={`${styles.tabLabel} `}
            style={{ color: getFontColor(index) }}
          >
            <span>{option}</span>
            <RightChevron borderColor={getFontColor(index)} />
          </div>
        }
      />
    ));
  }, [SidebarOptions, value]);

  return (
    <Box
      sx={{
        bgcolor: "#F1F1F1",
        borderRadius: "10px",
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        TabIndicatorProps={{
          className: styles.tabIndicator,
        }}
      >
        {memoizedTabs}
      </Tabs>
    </Box>
  );
}
