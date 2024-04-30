import { capitalize } from "@mui/material";

export const getButtonLabel = function (button) {
  if (!button?.type) return "";

  if (button.type.includes("ellipsis")) return "...";

  if (button.type === "page") return button.page;

  return capitalize(button.type);
};
