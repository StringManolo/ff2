import { ff } from "../ff2.mjs";
const App = props => {
    return (ff.createElement("div", { class: "myDivs" },
        ff.createElement("h1", null, props.innerText)));
};
export default App;
