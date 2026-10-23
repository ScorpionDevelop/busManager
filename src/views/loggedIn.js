export function initloggedIn(appContainer) {
  appContainer.innerHTML = `<h1 class="text-center margin-top-48">Bus-Manager</h1>
     <p>Succesfully LoggedIN</p>
     
     <button id="toLoginButton" class="button-custom2" type="button">Zum Login</button>
          
          
    
      `;

  document.getElementById("toLoginButton").addEventListener("click", () => {
    location.hash = "/login";
  });
}
