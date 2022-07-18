import React, { useState } from "react";
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
    label: "The Color Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);
  return (
    <div>
      <button onClick={() => setShowDropDown(!showDropDown)}>
        Topple dropdown
      </button>
      {showDropDown ? (
        <DropDown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};
