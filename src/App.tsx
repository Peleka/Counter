import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings/Settings";

function App() {
    const [number, setNumber] = useState(0)
    const incNumber = number + 1

    function increaseNumber() {
        setNumber(incNumber)
    }

    function resetCounter() {
        setNumber(0)
    }

    return (
        <div className="App">
            <div className="Wrapper">
                <Settings/>
            </div>
            <div className="Wrapper">
                <Counter
                    number={number}
                    increaseNumber={increaseNumber}
                    resetCounter={resetCounter}
                />
            </div>
        </div>
    );
}

export default App;
