import { html, render } from "../../ff2.mjs";
const target = document.querySelector("#app");
import Calc from "./components/Calc.js";
render(html `<${Calc} />`, target);
