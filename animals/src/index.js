import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// step 1
const el = document.getElementById('root');

// step 2
const root = ReactDOM.createRoot(el);

// step 3
root.render(<App />);