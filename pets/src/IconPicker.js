import React from "react";

const IconPicker = (props) => {
  return (
    <div className="IconPicker">
      <a href="/" className="dog">
        <img alt="𓃡, " height={5} weight={5} src={props.avatar} />
      </a>
    </div>
  );
};

export default IconPicker;
