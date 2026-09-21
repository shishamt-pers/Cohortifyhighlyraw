import { Home } from "../pages/home.js";

export function renderApp(root) {
  root.innerHTML = Home();
}