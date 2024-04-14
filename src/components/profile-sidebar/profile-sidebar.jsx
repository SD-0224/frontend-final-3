import React, { useMemo, useState } from "react";
import { Tabs, Box } from "@mui/material";
import Tab from "@mui/material/Tab";
import { RightChevron } from "../icons";
import styles from "./profile-sidebar.module.css";
import { getSelectedColor } from "./components/tab-content-styles";

export function SideBar({ SidebarOptions }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const memoizedTabs = useMemo(() => {
    return SidebarOptions?.map((option, index) => (
      <Tab
        key={index}
        sx={{ padding: "24px 10px", maxWidth: "none" }}
        label={
          <div
            className={`${styles.tabLabel}`}
            style={{ color: getSelectedColor(value, index) }}
          >
            <span>{option}</span>
            <RightChevron borderColor={getSelectedColor(value, index)} />
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
          style: {
            backgroundColor: "#17494D",
            width: "4px",
            left: 0,
            borderRadius: "10px",
            height: "54px",
            marginTop: "10px",
          },
        }}
      >
        {memoizedTabs}
      </Tabs>
    </Box>
  );
}
