import * as React from "react";
import { render } from "react-dom";

const App: React.FC = () => {
  return <div>hello</div>;
};

render(<App />, document.querySelector("#root"));
