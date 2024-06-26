import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";

export function CustomButton({
  variant = "contained",
  startIcon,
  endIcon,
  label,
  borderRadius = "8px",
  color = "var(--primary)",
  fontSize = "16px",
  fontWeight = "var(--medium-font-weight)",
  textColor = "var(--white)",
  padding = "6px 18px",
  children,
  ...props
}) {
  const isContained = variant === "contained";
  const [isHovered, setIsHovered] = useState(false);

  const outlinedButton = {
    color: color,
    border: "1px solid",
    borderColor: color,
  };

  const containedButton = {
    backgroundColor: color,
    color: textColor,
    boxShadow: 0,
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
    borderColor: isHovered
      ? "var(--primary-tint)"
      : startIcon.props.borderColor,
  };

  const endIconProps = endIcon && {
    borderColor: isHovered ? "var(--primary-tint)" : endIcon.props.borderColor,
  };

  const isXsScreen =
    useMediaQuery("(max-width:599px)") && (startIcon || endIcon);

  const xsPadding = startIcon || endIcon ? "10px 0 10px 10px" : "5px";

  return (
    <Button
      variant={variant}
      startIcon={startIcon && React.cloneElement(startIcon, startIconProps)}
      endIcon={endIcon && React.cloneElement(endIcon, endIconProps)}
      sx={{
        ...(isContained ? containedButton : outlinedButton),
        borderRadius: borderRadius,
        fontSize: fontSize,
        fontWeight: fontWeight,
        padding: { xs: xsPadding, sm: padding },
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
      {...props}
    >
      {!isXsScreen && label}
      {children}
    </Button>
  );
}
