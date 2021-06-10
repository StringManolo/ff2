import { html } from "../../../ff2.mjs"

import Keypad from "./Keypad.js";
import Screen from "./Screen.js";


const Calc = (props, state, setState) => {
  const { screenValue = 0 } = state;
  //const [ screenValue, changeValue ] = useState(0);

  const calculate = () => {
    /* 
     * DO NOT USE EVAL IN REAL APPLICATIONS */                                              let res = 0;                                                                            try {
      // eslint-disable-next-line
      res = eval(screenValue);
    } catch (er) {
      res = 0;
    }
    if (isNaN(res)) {                                                                         res = 0;
    }
    setState({ screenValue: res })
    //changeValue(res);
  }

  const buttonCallback = evnt => {
    const buttonValue = evnt.target.innerText;
    switch(buttonValue) {                                                                     case "C":
        changeValue("cleared.");
      break;

      case "=":
        calculate();
      break;

      default:
        // eslint-disable-next-line
        if (screenValue != 0) {
          if(/c/g.test(screenValue)) {
            //changeValue(buttonValue);
	    setState({ screenValue: buttonValue });
          } else {
            //changeValue(screenValue + buttonValue);
	    setState({ screenValue: screenValue + buttonValue });
          }
        } else {
          //changeValue(buttonValue);
          setState({ screenValue: buttonValue });
        }
    }
  }

  return html`<div>
      <${Screen} value=${screenValue} />
      <${Keypad} sharedCallback=${ e => { buttonCallback(e) } } />
    </div>`
}
export default Calc;
