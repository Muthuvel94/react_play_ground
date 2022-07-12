import React from "react";
import Accordion from "./components/accordion";

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
export default () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};
