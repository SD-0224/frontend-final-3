import { useEffect, useState } from "react";
import { Box, Pagination } from "@mui/material";
import { CustomButton } from "../../../../components/custom-button";
import { getButtonLabel } from "./modules/pagination";

const idleButton = {
  color: "var(--low-emphasis-text-color)",
  backgroundColor: "var(--grey)",
};

const activeButton = {
  color: "var(--white)",
  backgroundColor: "var(--primary)",
};

const buttonsContainer = {
  padding: "4px",
  borderRadius: "12px",
  ...idleButton,
};

export const CustomPagination = function ({
  pageNumber = 1,
  count,
  onChange,
  ...props
}) {
  const [page, setPage] = useState(pageNumber);
  const [showPrevious, setShowPrevious] = useState(false);
  const [showNext, setShowNext] = useState(true);

  useEffect(() => {
    setShowPrevious(page > 1);
    setShowNext(page < count);

    onChange(null, page);
  }, [page]);

  return (
    <Box display="flex" gap="8px" {...props}>
      <div
        style={{
          ...buttonsContainer,
          visibility: showPrevious ? "visible" : "hidden",
        }}
      >
        <CustomButton
          label="Previous"
          style={idleButton}
          onClick={() => setPage((page) => page - 1)}
        />
      </div>

      <Box sx={buttonsContainer}>
        <CustomButton
          {...{
            sx: {
              display: { xs: "initial", sm: "none" },
              ...activeButton,
            },
            label: page,
            borderRadius: "8px",
          }}
        />

        <Pagination
          {...{
            sx: {
              display: { xs: "none", sm: "initial" },
            },
            renderItem: (button) => {
              const label = getButtonLabel(button);
              const isEllipsis = button.type.includes("ellipsis");
              const buttonProps = page == label ? activeButton : idleButton;

              if (isEllipsis) return "...";

              return (
                <CustomButton
                  {...{
                    style: {
                      ...buttonProps,
                      margin: "0px 2.25px",
                    },
                    label,
                    onClick: () => setPage(label),
                  }}
                />
              );
            },
            hidePrevButton: true,
            hideNextButton: true,
            page,
            count,
            ...props,
          }}
        />
      </Box>

      <div
        style={{
          ...buttonsContainer,
          visibility: showNext ? "visible" : "hidden",
        }}
      >
        <CustomButton
          label="Next"
          style={idleButton}
          onClick={() => setPage((page) => page + 1)}
        />
      </div>
    </Box>
  );
};
