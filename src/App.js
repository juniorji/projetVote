import React from 'react'
import './App.css';
import Header from './composantes/Header';
import Main from './composantes/Main';
import Section from './composantes/Section';

function App() {
  return (
    <div class="allC">
      <Header/>
      <h1 class="setTitle">VOTE YOUR MAN</h1>
      <h2 class="setTitle">On Top</h2>
      <Section/>
      <Main/>
    </div>
  );
}

export default App;
