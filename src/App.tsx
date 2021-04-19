import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    var apple = 'apple';
    const bear = 'bear';
    if (apple) {
    }
    const concatString = 'qwer' + apple + '1234';

    console.log(concatString);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
