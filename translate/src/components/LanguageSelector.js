import React from "react";
import LanguageContext from "../context/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        Select the language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag nl"
          onClick={() => this.context.onLanguageChange("dutch")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
