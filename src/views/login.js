"use strict";

const appContainer = document.getElementById("app");

function showloginForm1() {
  appContainer.innerHTML = `<h1 class="text-center margin-top-48">Bus-Manager</h1>
      <div class="main">
        <div class="login rounded-8 padding-24 disp-flex flex-column">
          <h2 class="width-100 text-center">Login</h2>
          <form class="login-form disp-flex flex-column" action="">
            <label class="width-100" for="usermail">E-Mail</label>
            <input class=" margin-bottom-24" type="email" name="mail" id="usermail" placeholder="Hier Emailadresse eingeben" required />
            <label for="password">Passwort</label>
            <input class="margin-bottom-24" type="password" name="passwort" id="password" placeholder="Passwort" required />
            <a class="link-sec invisible" href="#">Passwort vergessen?</a>
            <button class="button-custom1" type="submit">Login</button>
            
          </form>
          <p class="">Noch keinen Account? <a class="link-pri" href="">Account anlegen</a></p>
        </div>
      </div>
      `;
}

function showloginForm() {
  appContainer.innerHTML = `<h1 class="text-center margin-top-48">Bus-Manager</h1>
      <div class="main">
        <div class="login rounded-8 padding-24 disp-flex flex-column">
          <h2 class="width-100 text-center">Login</h2>
          <form class="login-form disp-flex flex-column" action="">
            <label class="width-100" for="usermail">E-Mail</label>
            <input class=" margin-bottom-24" type="email" name="mail" id="usermail" placeholder="Hier Emailadresse eingeben" required />
            <label for="password">Passwort</label>
            <input class="margin-bottom-24" type="password" name="passwort" id="password" placeholder="Passwort" required />
            <a class="link-sec invisible" href="#">Passwort vergessen?</a>
            <button class="button-custom1" type="submit">Login</button>
            <button class="button-custom2" type="submit">Noch keinen Account</button>
            
          </form>
         </div>
      </div>
      `;
}

showloginForm();

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
