import React, { Component } from 'react';
import './App.css';
import TopNav from './components/Nav/TopNav'
import BottomNav from './components/Nav/BottomNav'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <BottomNav />
        {routes}
      </div>
    );
  }
}

export default App;
