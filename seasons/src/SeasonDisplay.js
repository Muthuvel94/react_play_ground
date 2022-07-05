import "./SeasonDisplay.css";
import React from "react";
import ReactDOM from "react-dom/client";

const seasonConfig = {
  summer: {
    text: "Byrr, it is chilly",
    iconName: "snowflake",
  },
  winter: {
    text: "Lets hit the beach",
    iconName: "sun",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  const Season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[Season];
  return (
    <div className={`season_display ${Season}`}>
      <i className={` icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={` icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
