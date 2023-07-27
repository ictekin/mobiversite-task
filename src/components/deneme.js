import React from "react";

import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomAccordion = (props) => {
  return (
    <Accordion
      sx={{
        maxWidth: "1200px",
        backgroundColor: "#fafafa",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{props.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{props.title ?? ""}</Typography>

        <Box
          sx={{
            display: "flex",
            margin: "1rem",
            backgroundColor: "#fff",
            gap: "10px",
          }}
        >
          {props.screenshots.map((val, index) => {
            return <img key={index} src={val} alt={"yok"} />;
          })}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
