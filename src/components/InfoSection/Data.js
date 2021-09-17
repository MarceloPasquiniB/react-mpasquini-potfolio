import pic1 from "../../images/svg-about.svg";
import pic2 from "../../images/svg-work.svg";

export const homeAbout = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "About",
  headline:
    "Front-end Developer with knowledge and skills in Project Management and Data Analytics.",
  item1: "- PMI's Certified Associate in Project Management - CAPM®",
  item2: "- MBA in Finance",
  item3: "- Google's and IBM's Data Analytics Certification ",
  item4: "- BSc Software Engineering cadidate",
  buttonLabel: "See my full profile",
  imgStart: false,
  alt: "Man completing tasks",
  dark: false,
  primary: false,
  darkText: true,
  img: `${pic1}`,
  clickContent: "LinkedIn",
};

export const homeExperience = {
  id: "experience",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "Experience",
  headline:
    "I have experience in many kinds of projects in various fields, such as:",
  item1: "- Video Game industry",
  item2: "- Insurance and Banking Products ",
  item3: "- Politics",
  item4: "- Industrial Energy",
  buttonLabel: "Send me a message",
  imgStart: true,
  alt: "Man at a board",
  dark: true,
  primary: true,
  darkText: false,
  img: `${pic2}`,
  clickContent: "experience",
};
