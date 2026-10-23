//router.js

"use strict";

const routes = {};

const appContainer = document.getElementById("app");

export function addRoute(path, viewFn) {
  routes[path] = viewFn;
}

function getPath() {
  return location.hash.slice(1) || "/";
}

function render() {
  const view = routes[getPath()] ?? routes["/login"];
  view(appContainer);
}

export function startRouter() {
  window.addEventListener("hashchange", render);
  render();
}
