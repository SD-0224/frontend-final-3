import { Box } from "@mui/material";
import { CustomInput } from "../../../../components/custom-input";
import { LeftChevron } from "../../../../components/icons";
import { CustomButton } from "../../../../components/custom-button";
import { PageTitle } from "../../../../components/page-title";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export function TitleSection({ title }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <PageTitle title={title} />
      {title === "Personal Information" && (
        <CustomButton
          startIcon={<LogoutOutlinedIcon />}
          label={"Logout"}
          variant="outlined"
          style={{ width: "fit-content" }}
        />
      )}
      {title === "My Orders" && (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"right"}
          gap={"8px"}
          maxWidth={"360px"}
          width={{ sm: "auto", md: "360px" }}
          marginBottom={"12px"}
          paddingInlineEnd={"16px"}
        >
          <LeftChevron />
          <CustomInput
            placeholder={"Search"}
            type={"search"}
            style={{ flex: "1 1 auto" }}
          />
        </Box>
      )}
    </Box>
  );
}
