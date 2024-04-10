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

export function SidebarMenu() {
  const [selected, setSelected] = useState(false);

  const SidebarOptions = [
    "Personal Information",
    "Refer and Earn",
    "My Orders",
    "My Wishlist",
    "Mt Reviews",
    "My Address Book",
    "My Saved Cards",
  ];

  const handleSidebarOptionClick = (index) => {
    setSelected(index);
  };

  const isOptionSelected = (index) => selected === index;

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
          {SidebarOptions.map((option, index) => (
            <>
              {isOptionSelected(index) && <div className={styles.vl}></div>}
              <ListItemButton
                key={index}
                sx={{
                  "&.Mui-selected, &.Mui-selected:hover": {
                    color: "#1B4B66",
                    backgroundColor: "#F1F1F100",
                  },
                  padding: "24px 10px",
                }}
                selected={isOptionSelected(index)}
                onClick={() => handleSidebarOptionClick(index)}
              >
                <ListItemText
                  primary={option}
                  primaryTypographyProps={{
                    fontSize: 16,
                    fontWeight: "medium",
                    letterSpacing: 0,
                  }}
                />
                <ListItemIcon sx={{ minWidth: "24px" }}>
                  <RightChevron
                    borderColor={
                      isOptionSelected(index) ? "#1B4B66" : "#13101E"
                    }
                  />
                </ListItemIcon>
              </ListItemButton>
            </>
          ))}
        </List>
      </Box>
    </>
  );
}
