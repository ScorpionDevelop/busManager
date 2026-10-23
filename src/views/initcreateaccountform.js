//initcreateaccountform.js

"use strict";

export function initAccountForm(appContainer) {
  appContainer.innerHTML = `<h1 class="text-center margin-top-48">Bus-Manager</h1>
      <div class="main">
        <div class="login rounded-8 padding-24 disp-flex flex-column">
          <h2 class="width-100 text-center">Account anlegen</h2>
          <form class="login-form disp-flex flex-column" action="">
            <label class="width-100" for="usermail">E-Mail</label>
            <input class=" margin-bottom-24" type="email" name="mail" id="usermail" placeholder="Hier Emailadresse eingeben" required />
            <label for="password">Passwort</label>
            <input class="margin-bottom-24" type="password" name="passwort" id="password" placeholder="Passwort" required />
            <label for="clubid">Vereins ID</label>
            <input class="margin-bottom-24" type="text" inputmode="nummeric" name="clubid" id="clubid" placeholder="Vereins ID" required />
            <button class="button-custom1" type="submit">Account anlegen</button>
            <button id="initLoginForm" class="button-custom2" type="button">Zum Login</button>
          </form>
          
        </div>
      </div>
      `;

  document.getElementById("initLoginForm").addEventListener("click", () => {
    location.hash = "/login";
  });

  document.querySelector(".login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    // Registrierung (Supabase)
  });
}
