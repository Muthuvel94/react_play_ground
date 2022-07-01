import React from "react";

const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      <div className="context">{props.children}</div>
      <div className="extra context">
        <div className="ui two buttons">
          <div className="ui basic Green button">Approve</div>
          <div className="ui basic Red button">Decline</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
