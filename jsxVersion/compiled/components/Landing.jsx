import { ff } from "../ff2.mjs";

const Landing = props => {
  return (
    <div class="myDivs">
      <h1>{props.innerText}</h1>
        {props.links.map(link => <a href={link.href}>{link.innerText}</a>)}
    </div>
  );
}

export default Landing;
