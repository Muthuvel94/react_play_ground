// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
import React, { useState } from "react";
import DropDown from "./DropDown";

const options = [
  {
    label: "Africans",
    value: "af",
  },
  {
    label: "hindi",
    value: "hi",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Dutch",
    value: "nl",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <DropDown
        label="Select a langauge"
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
    </div>
  );
};

export default Translate;
