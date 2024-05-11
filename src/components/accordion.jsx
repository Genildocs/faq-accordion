import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Acc() {
  return (
    <div>
      <Accordion className="tw-w-[500px]">
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header">
          <Typography>
            What is Frontend Mentor, and how will it help me?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Frontend Mentor is a program that helps people get a job.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
