import './App.css';
import React from 'react';
import Profile from './component/Profile';

export default function App() {
  return (
    <div className="App">
       <div>Hello React!</div>
       <Profile username="tmtm" name="Time Me" />
    </div>
  );
}
