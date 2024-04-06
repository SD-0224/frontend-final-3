import Button from "@mui/material/Button";

export function CustomButton({ variant, icon, label, color = "#1B4B66" }) {
  const outlinedButton = {
    color: color,
    borderColor: color,
  };

  const containedButton = {
    backgroundColor: color,
  };

  return (
    <Button
      variant={variant}
      startIcon={icon}
      sx={{
        ...(variant === "outlined" ? outlinedButton : containedButton),
        padding: "7px 40px",
        borderRadius: "8px",
      }}
    >
      {label}
    </Button>
  );
}
