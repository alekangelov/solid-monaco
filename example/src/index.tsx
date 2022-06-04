/* @refresh reload */
import { render } from "solid-js/web";
import { initMonaco } from "solid-monaco";
import "./index.css";
import App from "./App";

render(() => {
  initMonaco();
  return <App />;
}, document.getElementById("root") as HTMLElement);
