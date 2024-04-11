import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import { RightChevron } from "../../../icons";

export function ListOptionIcon({ isOptionSelected, index }) {
  return (
    <ListItemIcon sx={{ minWidth: "24px" }}>
      <RightChevron
        borderColor={isOptionSelected(index) ? "#1B4B66" : "#13101E"}
      />
    </ListItemIcon>
  );
}
