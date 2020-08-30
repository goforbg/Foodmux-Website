// CSS and SASS files
import "./index.scss";

import Tobi from "rqrauhvmra__tobi";
const tobi = new Tobi();

// Remove the two following lines to remove the product hunt floating prompt

// Remove the following lines to remove the darkmode js
import Darkmode from "darkmode-js";
function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
window.addEventListener("load", addDarkmodeWidget);
