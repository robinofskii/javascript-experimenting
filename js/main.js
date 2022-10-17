import { renderNavigationItemsToList } from "./generateNavigation.js";

console.log("Loading navigation items");

const navigationElements = document.querySelectorAll("nav");

navigationElements.forEach(renderNavigationItemsToList);

console.log("Loaded navigation items");
