import React, { useState } from "react";
import Accordion from "./components/accordion";
import Search from "./components/Search";
import DropDown from "./components/DropDown";
import Translate from "./components/Translate";
import Router from "./components/Router";
import Header from "./Header";

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
    label: "The Color Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Router path="/">
        <Accordion items={items} />
      </Router>
      <Router path="/list">
        <Search options={options} />
      </Router>
      <Router path="/dropdown">
        <DropDown
          label="select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Router>
      <Router path="/translate">
        <Translate />
      </Router>
    </div>
  );
};
