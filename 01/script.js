const heading3 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React!!!"
);

// log(heading3) -> this will return a JS object.
const root3 = ReactDOM.createRoot(document.getElementById("root"));
// root3.render(heading3);



/*
 <div id="parent">
     <div id="child">
         <h1>I am h1 tag </h1>
     </div>
 </div>
*/
const heading4 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am h1 tag")
  )
);
// root3.render(heading4);



/*
 <div id="parent">
     <div id="child">
         <h1>I am h1 tag </h1>
         <h2>I am h2 tag </h2>
     </div>
 </div>
*/
const heading5 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ])
);
// root3.render(heading5);
