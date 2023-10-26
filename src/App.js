import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import Login from './components/auth/Login';
import Quora from './components/Quora';


function App() {

    const user = useSelector

    return (
        <div className="App">
            {user ? (<Quora />) : (<Login />)}

        </div>
    );
}

export default App;


