import Button from "@mui/material/Button";

export function IconicButton({ icon, label }) {
  return (
    <Button
      variant="contained"
      startIcon={icon}
      sx={{
        backgroundColor: "#1B4B66",
        padding: "7px 40px",
        borderRadius: "8px",
      }}
    >
      {label}
    </Button>
  );
}
