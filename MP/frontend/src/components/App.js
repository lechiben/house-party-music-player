import React, { Component } from "react";
import { createRoot } from "react-dom/client"; // Import createRoot instead of render

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<h1>test react code</h1>);
    }
}

const appDiv = document.getElementById("app");
const root = createRoot(appDiv); 
root.render(<App />); // Use root.render instead of render

