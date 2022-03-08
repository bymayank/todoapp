import React from 'react';
import './App.css';
import Todo from './components/todo';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className='todo-app'>
      <Header/>
      <Todo/>
      <Footer/>
    </div>
  );
}

export default App;