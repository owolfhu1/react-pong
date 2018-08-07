import React, { Component } from 'react';
import './App.css';
import PongGame from "./components/PongGame";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>left paddle: up=q, down=a<br/>right paddle: up/down arrows<br/>Enter to start</h1>
                </header>
                
                
                <PongGame/>
            
            
            </div>
        );
    }
}

export default App;
