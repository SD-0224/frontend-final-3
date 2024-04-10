import React from "react";
import { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import { Box } from "@mui/material";
import styles from "./profile-sidebar.module.css";

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
                color: "#13101E",
                fontSize: "16px",
                fontWeight: 500,
                padding: "24px 10px",
              }}
              selected={selected === index ? true : false}
              onClick={() => handleClick(index)}
            >
              {section}
            </ListItemButton>
          </>
        ))}
      </Box>
    </>
  );
}
