import { Box, Typography } from "@mui/material";

export function Verticaltext({ title, info }) {
  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: 16,
            fontWeight: "var(--medium-font-weight)",
            color: "var(--low-emphasis-text-color)",
          }}
        >
          {title}
        </Typography>
        {info?.map((text, index) => {
          return (
            <Typography
              key={index}
              variant="body1"
              sx={{
                fontSize: 16,
                fontWeight: "var(--medium-font-weight)",
                color: "var(--high-emphasis-text-color)",
                marginBottom: "4px",
              }}
            >
              {text}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
}
