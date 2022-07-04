
import './App.css';
import Header from './components/Header';
import Subheader from './components/Subheader';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  let [inputState, setInputState]=useState('');

  

  return (
    <>
    <Header/>
    <Subheader/>
    <Card/>
    </>
  );
}

export default App;
