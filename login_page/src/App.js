import "./App.css";

const clickspan1 = () => {
  return (
    <div class="ui mini horizontal divided list">
      <div class="item">
        <div class="content">
          <span
            style={{ colour: "blue", cursor: "pointer" }}
            onClick={clickspan1}
            class="span1"
          >
            Home |
          </span>
          <span
            style={{ colour: "blue", cursor: "pointer" }}
            onClick={clickspan1}
            class="span2"
          >
            Exercise 1 |
          </span>
          <span
            style={{ colour: "blue", cursor: "pointer" }}
            onClick={clickspan1}
            class="span3"
          >
            Exercise 2 |
          </span>
          <span
            style={{ colour: "blue", cursor: "pointer" }}
            onClick={clickspan1}
            class="span4"
          >
            Exercise 3 |
          </span>
          <span
            style={{ colour: "blue", cursor: "pointer" }}
            onClick={clickspan1}
            class="span5"
          >
            Exercise 4 |
          </span>
          <span
            style={{ colour: "blue", cursor: "pointer" }}
            onClick={clickspan1}
            class="span6"
          >
            Exercise 5 |
          </span>
          <span
            style={{ colour: "blue", cursor: "pointer" }}
            onClick={clickspan1}
            class="span7"
          >
            Exercise 6 |
          </span>
          <span
            style={{ colour: "blue", cursor: "pointer" }}
            onClick={clickspan1}
            class="span8"
          >
            Exercise 7 |
          </span>
          <span
            style={{ colour: "blue", cursor: "pointer" }}
            onClick={clickspan1}
            class="span9"
          >
            Exercise 8 |
          </span>
          <span
            style={{ colour: "blue", cursor: "pointer" }}
            onClick={clickspan1}
            class="span10"
          >
            Exercise 9 |
          </span>
          <p></p>
          <p></p>
          <p></p>
          <div class="ui_input">
            <input
              type="text"
              placeholder="First Name"
              size={50}
              style={{ width: "20%", height: "30px" }}
            />
          </div>
          <p></p>
          <div class="ui_input">
            <input
              type="text"
              placeholder="Last Name"
              size={50}
              style={{ width: "20%", height: "30px" }}
            />
          </div>
          <button
            style={{
              width: 265,
              height: "50px",
              backgroundColor: "#99004d",
              marginTop: 20,
              marginLeft: 505,
              cursor: "pointer",
            }}
            class="ui_red_button"
          >
            GREET ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default clickspan1;
