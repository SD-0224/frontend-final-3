import React from "react";
import { useState } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import styles from "./profile-sidebar.module.css";
import { RightChevron } from "../icons";

export function SideBar() {
  const [selected, setSelected] = useState(false);

  const sidebarSections = [
    "Personal Information",
    "Refer and Earn",
    "My Orders",
    "My Wishlist",
    "Mt Reviews",
    "My Address Book",
    "My Saved Cards",
  ];

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#F1F1F1",
          borderRadius: "8px",
          position: "relative",
        }}
      >
        <List>
          {sidebarSections.map((section, index) => (
            <>
              {selected === index && <div className={styles.vl}></div>}
              <ListItemButton
                key={index}
                sx={{
                  "&.Mui-selected, &.Mui-selected:hover": {
                    color: "#1B4B66",
                    backgroundColor: "#F1F1F100",
                  },
                  padding: "24px 10px",
                }}
                selected={selected === index}
                onClick={() => handleClick(index)}
              >
                <ListItemText
                  primary={section}
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: "medium",
                    letterSpacing: 0,
                  }}
                />
                <ListItemIcon sx={{ minWidth: "24px" }}>
                  {selected === index ? (
                    <RightChevron borderColor={"#1B4B66"} />
                  ) : (
                    <RightChevron />
                  )}
                </ListItemIcon>
              </ListItemButton>
            </>
          ))}
        </List>
      </Box>
    </>
  );
}
