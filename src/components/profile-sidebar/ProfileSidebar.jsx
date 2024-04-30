import React, { useMemo, useState } from "react";
import { Tabs, Box, Tab } from "@mui/material";
import { RightChevron } from "../icons";
import styles from "./ProfileSidebar.module.css";
import { getSelectedColor } from "./components/tab-content-styles";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function getTabIndexProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export function ProfileSidebar({
  SidebarOptions,
  titleSetter,
  setselectedOrderId,
}) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    titleSetter(newValue);
    setselectedOrderId("");
  };

  const memoizedTabs = useMemo(() => {
    const TabStyles = {
      padding: "24px 10px",
      maxWidth: "none",
      "& .MuiTouchRipple-root": {
        width: "3px",
        height: "56px",
        maxHeight: "100%",
        background: "rgb(23, 73, 77)",
        borderRadius: "8px",
        transition: "0.2s all",
        opacity: "0",
        visibility: "hidden",
        top: "50%",
        transform: "translateY(-50%)",
      },
      "&.Mui-selected": {
        "& .MuiTouchRipple-root": {
          opacity: "1",
          visibility: "visible",
        },
      },
    };
    return SidebarOptions?.map((option, index) => (
      <Tab
        key={index}
        sx={TabStyles}
        {...getTabIndexProps(index)}
        label={
          <div
            className={`${styles.tabLabel}`}
            style={{ color: getSelectedColor(value, index) }}
          >
            <span>{option.label}</span>
            <RightChevron borderColor={getSelectedColor(value, index)} />
          </div>
        }
      />
    ));
  }, [SidebarOptions, value]);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "280px 1fr",
        gap: "22px",
        alignItems: "start",
        "@media (max-width: 768px)": { "&": { gridTemplateColumns: "1fr" } },
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs"
        sx={{
          borderRadius: "10px",
          backgroundColor: "var(--grey)",
          "@media (max-width: 768px)": {
            ".MuiTabs-flexContainerVertical": {
              flexDirection: "row",
              overflow: "auto",
            },
          },
        }}
        TabIndicatorProps={{
          style: {
            display: "none",
            backgroundColor: "#17494D",
            width: "4px",
            left: 0,
            borderRadius: "8px",
            height: "54px",
            marginTop: "9px",
          },
        }}
      >
        {memoizedTabs}
      </Tabs>
      {SidebarOptions?.map((option, index) => {
        return (
          <TabPanel value={value} index={index} key={index}>
            {option.component}
          </TabPanel>
        );
      })}
    </Box>
  );
}
