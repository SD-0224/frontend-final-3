import { ListItemText } from "@mui/material";

export function ListOptionText({ option }) {
  return (
    <ListItemText
      primary={option}
      primaryTypographyProps={{
        fontSize: 16,
        fontWeight: "medium",
        letterSpacing: 0,
      }}
    />
  );
}
