import Button from "@mui/material/Button";

export function CustomButton({
  variant,
  startIcon,
  endIcon,
  label,
  borderRadius = "8px",
  color = "#1B4B66",
  fontSize = "16px",
  fontWeight = "600",
  textColor = "FFFFFF",
}) {
  const outlinedButton = {
    color: color,
    borderColor: color,
  };

  const containedButton = {
    backgroundColor: color,
    color: textColor,
  };

  return (
    <Button
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      sx={{
        ...(variant === "outlined" ? outlinedButton : containedButton),
        borderRadius: { borderRadius },
        width: "100%",
        fontSize: { fontSize },
        fontWeight: { fontWeight },
      }}
    >
      {label}
    </Button>
  );
}
