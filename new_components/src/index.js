import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import { faker } from "@faker-js/faker";
import ApprovalCard from "./ApprovalCard";
if (module.hot) {
  module.hot.accept();
}
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you Sure to continue?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Amose"
          date="Today at 2 PM"
          text="Great work"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Muthu"
          date="Today at 1 PM"
          text="Almight"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Packs"
          date="Today at 4 PM"
          text="Good Work!!!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="Seelan"
          date="Today at 8 PM"
          text="Nice Job!!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetails
          author="CD"
          date="Today at A PM"
          text="Best one!!"
          avatar={faker.image.image()}
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
