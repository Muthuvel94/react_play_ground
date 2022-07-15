import React from "react";
import Accordion from "./components/accordion";
import Search from "./components/Search";
import DropDown from "./components/DropDown";

const items = [
  {
    title: "what is react",
    content: "React is a front end javascript framework",
  },
  {
    title: "why use react",
    content: "React is a favourite JS library among engineers",
  },
  {
    title: "what do you use react",
    content: "you use react by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Color Bluw",
    value: "blue",
  },
];

export default () => {
  return (
    <div>
      <DropDown options={options} />
    </div>
  );
};
