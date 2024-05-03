import React, { useEffect, useMemo, useState } from "react";
import { Tabs, Box, Tab } from "@mui/material";
import { RightChevron } from "../icons";
import styles from "./ProfileSidebar.module.css";
import { getSelectedColor } from "./components/tab-content-styles";
import { useLocation, useNavigate } from "react-router-dom";

export function ProfileSidebar({
  SidebarOptions,
  titleSetter,
  setSelectedOrderId,
}) {
  const [value, setValue] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  function formatSidebarOptionLabelToPath(option) {
    return option.label.toLowerCase().split(" ").join("-");
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    titleSetter(newValue);
    setSelectedOrderId("");
    const newPath =
      newValue !== 0
        ? formatSidebarOptionLabelToPath(SidebarOptions[newValue])
        : "";
    navigate(`/user-profile/${newPath}`);
  };

  function updateTabSelection(location, setValue, SidebarOptions) {
    const pathSegments = location.pathname.split("/");
    const newPath = pathSegments[pathSegments.length - 1];

    const selectedIndex = SidebarOptions.findIndex((option) =>
      formatSidebarOptionLabelToPath(option).includes(newPath)
    );

    setValue(selectedIndex !== -1 ? selectedIndex : 0);
  }

  useEffect(() => {
    updateTabSelection(location, setValue, SidebarOptions);
  }, [location.pathname]);

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
        marginBottom: { xs: "20px", md: "0" },
        "@media (max-width: 900px)": { "&": { gridTemplateColumns: "1fr" } },
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
          "@media (max-width: 900px)": {
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
    </Box>
  );
}
