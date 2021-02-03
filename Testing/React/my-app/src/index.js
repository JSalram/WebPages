import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar"

function App() {
    return <Navbar home="active"/>;
}

ReactDOM.render(<App />, document.getElementById("root"));
