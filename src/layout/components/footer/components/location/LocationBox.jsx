import { Box } from "@mui/material";
import { Location } from "../../../../../components/icons";

export const LocationBox = ({ country }) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", gap: "1px", color: "var(--white)" }}
    >
      <Location borderColor="var(--white)" />
      <span>{country}</span>
    </Box>
  );
};
