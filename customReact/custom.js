function customRender(reactelement, container) {
  const dome = document.createElement(reactelement.type);
  dome.innerHTML = reactelement.children;
  for (const prop in reactelement.props) {
    dome.setAttribute(prop, reactelement.props[prop]);
  }
  container.appendChild(dome);
}

const reactelement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "click me to visit google",
};

const container = document.querySelector("#root");

customRender(reactelement, container);
