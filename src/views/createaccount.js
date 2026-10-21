"use strict";

const appContainer = document.getElementById("app");

function loginForm() {
  appContainer.innerHTML = `<h1 class="text-center margin-top-48">Bus-Manager</h1>
      <div class="main">
        <div class="login rounded-8 padding-24 disp-flex flex-column">
          <h2 class="width-100 text-center">Login</h2>
          <form class="login-form disp-flex flex-column" action="">
            <label class="width-100" for="usermail">E-Mail</label>
            <input class=" margin-bottom-24" type="email" name="mail" id="usermail" placeholder="Hier Emailadresse eingeben" required />
            <label for="password">Passwort</label>
            <input class="margin-bottom-24" type="password" name="passwort" id="password" placeholder="Passwort" required />
            <label for="clubid">Vereins ID</label>
            <input class="margin-bottom-24" type="number" name="passwort" id="clubid" placeholder="Vereins ID" required />
            
            
            <a class="link-sec invisible" href="#">Passwort vergessen?</a>
            <button class="button-custom1" type="submit">Login</button>
          </form>
          <p class="invisible">Noch keinen Account? <a class="link-pri" href="">Account anlegen</a></p>
        </div>
      </div>
      `;
}

loginForm();
