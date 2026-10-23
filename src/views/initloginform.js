// initloginform.js

/*TODO
Anpassen von:
 <a class="link-sec invisible" href="#">Passwort vergessen?</a>
umbau auf Button und dann eigene Route setzen und Formular entwerfen + Logik für Supabase einbauen

 */
//use strict wird der vollständigkeit halber gesetzt, auch wenn Module autom. im Strict-Mode laufen

"use strict";

export function initloginForm(appContainer) {
  appContainer.innerHTML = `<h1 class="text-center margin-top-48">Bus-Manager</h1>
      <div class="main">
        <div class="login rounded-8 padding-24 disp-flex flex-column">
          <h2 class="width-100 text-center">Login</h2>
          <form class="login-form disp-flex flex-column" action="">
            <label class="width-100" for="usermail">E-Mail</label>
            <input class=" margin-bottom-24" type="email" name="mail" id="usermail" placeholder="Hier Emailadresse eingeben" autocomplete="email" required />
            <label for="password">Passwort</label>
            <input class="margin-bottom-24" type="password" name="passwort" id="password" placeholder="Passwort" autocomplete="current-password" required />
            <a class="link-sec invisible" href="#">Passwort vergessen?</a>
            <button class="button-custom1" type="submit">Login</button>
            <button id= "initCreateAccountForm" class="button-custom2" type="button">Noch keinen Account?</button>
            
          </form>
         </div>
      </div>
      `;

  document.getElementById("initCreateAccountForm").addEventListener("click", () => {
    location.hash = "/register";
  });

  document.querySelector(".login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    // Login-Logik (Supabase)
  });
}

/*
import { createClient } from "https://esm.sh/@supabase/supabase-js";
// import { createClient } from "@supabase/supabase-js";

import { SUPABASE_URL, SUPABASE_ANON_KEY } from "./config.js";

// Create a single supabase client for interacting with your database

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const result = document.getElementById("result");

//document.getElementById("btnLogin").addEventListener("click", login);

document.getElementById("btnLogout").addEventListener("click", logout);

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  await login();
});

async function login() {
  const email = emailInput.value;
  const password = passwordInput.value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    result.innerHTML = `<span style="color:red">${error.message}</span>`;
    return;
  }

  result.innerHTML = `
        <span style="color:green">
            Willkommen ${data.user.email}
        </span>`;
}

async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return;
  }

  result.innerHTML = "Erfolgreich abgemeldet";
}

checkSession();

async function checkSession() {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    result.innerHTML = `Bereits angemeldet als ${session.user.email}`;
  }
}

*/
