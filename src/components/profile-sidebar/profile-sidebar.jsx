import React from "react";
import { useState } from "react";
import { Box, List } from "@mui/material";
import styles from "./profile-sidebar.module.css";
import { RightChevron } from "../icons";
import { ListOptionContent } from "./components/list-option-content";

export function SidebarMenu({ SidebarOptions }) {
  const [selected, setSelected] = useState(false);

  const handleSidebarOptionClick = (index) => {
    setSelected(index);
  };

  const isOptionSelected = (index) => selected === index;

  return (
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
            {isOptionSelected(index) && (
              <div className={styles.verticalLine}></div>
            )}
            <ListOptionContent
              index={index}
              handleSidebarOptionClick={handleSidebarOptionClick}
              isOptionSelected={isOptionSelected}
              option={option}
              icon={<RightChevron />}
            />
          </>
        ))}
      </List>
    </Box>
  );
}
