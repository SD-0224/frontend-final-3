import { ListItemButton } from "@mui/material";
import { ListOptionText } from "../list-option-text";
import { ListOptionIcon } from "../list-option-icon";

const selectedOptionStyle = {
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "#1B4B66",
    backgroundColor: "#F1F1F100",
  },
  padding: "24px 10px",
};

export function ListOptionContent({
  index,
  isOptionSelected,
  handleSidebarOptionClick,
  option,
}) {
  return (
    <ListItemButton
      key={index}
      sx={{
        ...selectedOptionStyle,
      }}
      selected={isOptionSelected(index)}
      onClick={() => handleSidebarOptionClick(index)}
    >
      <ListOptionText option={option} />
      <ListOptionIcon isOptionSelected={isOptionSelected} index={index} />
    </ListItemButton>
  );
}
