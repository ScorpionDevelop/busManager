//main.js

"use strict";

import "./style.css";
import { addRoute, startRouter } from "./router";
import { initloginForm } from "./views/initloginform";
import { initAccountForm } from "./views/initaccountform";
import { supabase } from "./supabaseClient";
import { initloggedIn } from "./views/loggedIn";

addRoute("/login", initloginForm);
addRoute("/register", initAccountForm);
addRoute("/loggedIn", initloggedIn);

startRouter();
