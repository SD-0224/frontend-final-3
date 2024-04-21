import { AccordionComponent } from "../accordion-component";
import { CustomInput } from "../custom-input";
import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  boxShadow: "unset",
}));

export function AddressForm({ title, addressFormEntries }) {
  return (
    <AccordionComponent title={title}>
      <Box
        sx={{
          flexGrow: 1,
          mr: "20px",
          mt: "24px",
        }}
      >
        <Grid
          container
          spacing={{ xs: "20px", md: "32px" }}
          columns={{ xs: 1, md: 2 }}
        >
          {addressFormEntries.map(({ id, type, placeholder, label }, index) => (
            <Grid item xs={1} md={1} key={index}>
              <Item>
                <CustomInput
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  label={label}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </AccordionComponent>
  );
}
