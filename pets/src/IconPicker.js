import React from "react";

const IconPicker = (props) => {
  return (
    <span className="IconPicker">
      <a href="/" className="dog">
        <img alt="  𓃡 " src={props.avatar} />
      </a>
    </span>
  );
};

export default IconPicker;
