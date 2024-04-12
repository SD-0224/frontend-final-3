import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { RightChevron } from "../icons";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export function SideBar({ SidebarOptions }) {
  const [value, setValue] = React.useState(0);
  console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "#F1F1F1",
        borderRadius: "10px",
        marginLeft: "20px",
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: "#17494D",
            width: "4px",
            left: 0,
            borderRadius: "10px",
            height: "54px",
            marginTop: "10px",
          },
        }}
      >
        {SidebarOptions?.map((option, index) => {
          return (
            <Tab
              key={index}
              className="MuiTab-fullWidth"
              style={{
                maxWidth: "none",
              }}
              sx={{
                padding: "24px 10px",
              }}
              label={
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "16px",
                    fontWeight: "700px",
                    color: value === index ? "#1B4B66" : "#13101E",
                  }}
                >
                  <span>{option}</span>
                  <RightChevron
                    borderColor={value === index ? "#1B4B66" : "#13101E"}
                  />
                </div>
              }
            />
          );
        })}
      </Tabs>
    </Box>
  );
}
