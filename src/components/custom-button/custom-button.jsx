import Button from "@mui/material/Button";
import React, { useState } from "react";

export function CustomButton({
  variant = "contained",
  startIcon,
  endIcon,
  label,
  borderRadius = "8px",
  color = "#1B4B66",
  fontSize = "16px",
  fontWeight = "500",
  textColor = "#FFFFFF",
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
    borderColor: isHovered ? "#639599" : startIcon.props.borderColor,
  };

  const endIconProps = endIcon && {
    borderColor: isHovered ? "#639599" : endIcon.props.borderColor,
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
            ? { backgroundColor: "#639599", boxShadow: "unset" }
            : {
                color: "#639599",
                borderColor: "#1B4B66",
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
