//main.js

"use strict";

import "./style.css";
import { addRoute, startRouter } from "./router";
import { initloginForm } from "./views/initloginform";
import { initAccountForm } from "./views/initcreateaccountform";

addRoute("/login", initloginForm);
addRoute("/register", initAccountForm);
//addRoute("/", initloginForm);

startRouter();
