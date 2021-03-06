import "./App.css";
import IconPicker from "./IconPicker";
import { faker } from "@faker-js/faker";

function App() {
  return (
    <div class="ui_segments">
      <div class="ui_segment1">
        <p>
          <IconPicker avatar={faker.animal.dog()} />
          dog
        </p>
      </div>
      <p></p>
      <div class="ui_segment2">
        <p>
          <IconPicker avatar={faker.animal.cat()} />
          cat
        </p>
      </div>
      <p></p>
      <div class="ui_segment3">
        <p>
          <IconPicker avatar={faker.animal.crocodilia()} />
          crocodilia
        </p>
      </div>
      <p></p>
      <div class="ui_segment4">
        <p>
          <IconPicker avatar={faker.animal.cow()} />
          cow
        </p>
      </div>
      <p></p>
      <div class="ui_segment5">
        <p>
          <IconPicker avatar={faker.animal.snake()} />
          snake
        </p>
      </div>
      <p></p>
      <div class="ui_segment6">
        <p>
          <IconPicker avatar={faker.animal.horse()} />
          horse
        </p>
      </div>
    </div>
  );
}

export default App;
