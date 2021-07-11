import { ff } from "../ff2.mjs";
const Landing = props => {
    return (ff.createElement("div", { class: "myDivs" },
        ff.createElement("h1", null, props.innerText),
        props.links.map(link => ff.createElement("a", { href: link.href }, link.innerText))));
};
export default Landing;
