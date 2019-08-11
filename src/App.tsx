import React from 'react';
import logo from './logo.svg';
import { Button } from 'antd';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            welcome sun
          </p>
        </header>
        <Button type="primary">antd按钮</Button>
      </div>
    );
  };
}

export default App;
