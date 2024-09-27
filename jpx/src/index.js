// step 1: import the Reacr and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// step 2: Get a reference to the dive with ID root
const el = document.getElementById('root');

// step 3: Tell react to take control of that element
const root = ReactDOM.createRoot(el);

// step 4: Create a component
function App(){
    return <h1>Hi There!</h1>
}

// step 5: Show the component on the screen
root.render(<App/>);