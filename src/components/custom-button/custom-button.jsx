import Button from "@mui/material/Button";
import React, { useState } from "react";

export function CustomButton({
  variant = "contained",
  startIcon,
  endIcon,
  label,
  borderRadius = "8px",
  color = "var(--primary)",
  fontSize = "16px",
  fontWeight = "500",
  textColor = "var(--white)",
  padding = "6px 18px",
}) {
  const isContained = variant === "contained";
  const [isHovered, setIsHovered] = useState(false);

  const outlinedButton = {
    color: color,
    borderColor: color,
  };

  const containedButton = {
    backgroundColor: color,
    color: textColor,
  };

  const handleMouseEnter = () => {
    if (!isContained) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isContained) {
      setIsHovered(false);
    }
  };

  const startIconProps = startIcon && {
    borderColor: isHovered ? "var(--primary-tint)" : startIcon.props.borderColor,
  };

  const endIconProps = endIcon && {
    borderColor: isHovered ? "var(--primary-tint)" : endIcon.props.borderColor,
  };

  return (
    <Button
      variant={variant}
      startIcon={startIcon && React.cloneElement(startIcon, startIconProps)}
      endIcon={endIcon && React.cloneElement(endIcon, endIconProps)}
      sx={{
        ...(isContained ? containedButton : outlinedButton),
        borderRadius: borderRadius,
        width: "100%",
        fontSize: fontSize,
        fontWeight: fontWeight,
        padding: padding,
        textTransform: "none",
        "&:hover": {
          ...(isContained
            ? { backgroundColor: "var(--primary-tint)", boxShadow: "unset" }
            : {
              color: "var(--primary-tint)",
              borderColor: "var(--primary)",
              backgroundColor: "unset",
            }),
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label}
    </Button>
  );
}
