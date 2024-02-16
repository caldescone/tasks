import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                return <h1>A website about Peanut M&Ms</h1>
                <img
                    src="../images/peanutm&ms.avif"
                    alt="A pack of peanut M&Ms"
                />
                UD CISC275 with React Hooks and TypeScript - Christopher
                Calderone - Hello World
            </header>
            List with Three Elements:
            <ol>
                <li> Peanuts </li>
                <li> Chocolate </li>
                <li> Goodness </li>
            </ol>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
