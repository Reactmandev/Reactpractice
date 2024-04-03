const heading = React.createElement("div", { id: "parent"}, [
  React.createElement("h1", { id: "heading" }, "Hello World"),
]);

console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


// const name=React.createElement("div",{value:"man"},"Hello world",React.createElement("h1",{value1:"van"}))
// console.log(name)