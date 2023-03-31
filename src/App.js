import React, { Component } from 'react';
import './App.css';
import Clicker from './Clicker';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Clicker maxNum={10} />
      </div>
    )
  }

}

export default App;
