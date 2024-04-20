import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export function AccordionComponent({ title, children }) {
  return (
    <div>
      <Accordion defaultExpanded sx={{ boxShadow: 0 }}>
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: "var(--dark)", fontSize: "2rem" }} />
          }
          aria-controls="accordion-content"
          sx={{
            fontSize: "20px",
            fontWeight: "var(--semi-bold-font-weight)",
            padding: "0 0 8px",
            borderBottom: 1,
            borderColor: "rgba(0,0,0,0.12)",
            my: "13px",
            ".MuiAccordionSummary-content.Mui-expanded": {
              margin: 0,
            },
            "&.Mui-expanded": {
              minHeight: "unset",
              maxHeight: "26px",
            },
          }}
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
}
