//initaccountform.js

"use strict";

export function initAccountForm(appContainer) {
  appContainer.innerHTML = `<h1 class="text-center margin-top-48">Bus-Manager</h1>
      <main class="main">
        <div class="login rounded-8 padding-24 disp-flex flex-column">
          <h2 class="width-100 text-center">Account anlegen</h2>
          <form class="login-form register-form disp-flex flex-column" >
            <label class="width-100" for="usermail">E-Mail</label>
            <input class=" margin-bottom-24" type="email" name="mail" id="usermail" autocomplete="email" placeholder="Hier Emailadresse eingeben" required />
            <label for="password">Passwort</label>
            <input id="password" class="margin-bottom-24" type="password" name="passwort" autocomplete="new-password" minlength="8" placeholder="Passwort" required />
            <label for="clubid">Vereins ID</label>
            <input class="margin-bottom-24" type="text" inputmode="numeric" pattern="[0-9]*" minlength="6" name="clubid" id="clubid" placeholder="Vereins ID" required />
            <button class="button-custom1" type="submit">Account anlegen</button>
            <button id="toLoginButton" class="button-custom2" type="button">Zum Login</button>
          </form>
          
        </div>
      </main>
      `;

  document.getElementById("toLoginButton").addEventListener("click", () => {
    location.hash = "/login";
  });

  document.querySelector(".register-form").addEventListener("submit", (e) => {
    e.preventDefault();
    // Registrierung (Supabase)
  });
}
