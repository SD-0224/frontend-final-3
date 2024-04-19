import { Box } from "@mui/material";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
export const CopyrightBox = ({ text }) => {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "2px",
        color: "var(--light-text-color)",
      }}
    >
      <CopyrightOutlinedIcon />
      {currentYear}
      <span>|</span>
      <span>{text}</span>
    </Box>
  );
};
