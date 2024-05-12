import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Start from "../assets/icon-star.svg";
const data = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    description:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    title: "Is Frontend Mentor free?",
    description:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio? ",
    description:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    title: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    description:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];
export default function Acc() {
  return (
    <div className="tw-bg-white tw-w-[500px] tw-p-4 tw-rounded-lg ">
      <div className="tw-flex tw-gap-1">
        <img src={Start} className="tw-w-6" alt="Star" />
        <h1 className="tw-font-whereas">FAQs</h1>
      </div>

      {data.map((item) => (
        <Accordion key={item.title} className="tw-shadow-none ">
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
          >
            <Typography className="tw-font-whereas tw-font-semibold title">
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="tw-font-whereas tw-text-[14px] description">
              {item.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
