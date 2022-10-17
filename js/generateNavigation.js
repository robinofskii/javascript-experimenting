const NAVIGATION_ITEMS = [
  {
    key: 0,
    name: "Home",
    route: "/",
  },
  {
    key: 1,
    name: "Lorem",
    route: "/pages/lorem.html",
  },
  {
    key: 2,
    name: "Buttons",
    route: "/pages/buttons.html",
  },
];

export const renderNavigationItemsToList = (navElement) => {
  const list = document.createElement("ul");

  NAVIGATION_ITEMS.map((item) => {
    const listItem = document.createElement("li");

    const listItemAnchor = document.createElement("a");
    listItemAnchor.href = item.route;

    listItem.appendChild(listItemAnchor);

    listItemAnchor.appendChild(document.createTextNode(item.name));
    list.appendChild(listItem);
  });

  navElement.appendChild(list);
};
