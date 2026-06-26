let div = React.createElement(
    "div",
    {class:"box"},
    React.createElement("h1",null,"this is the h1 of the React/virtualDom inside the div "),
);

let realRoot = document.querySelector("#root");
let virtualRoot =ReactDOM.createRoot(realRoot);
virtualRoot.render(div);
