import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';


class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="title">Animal  Adaptations</h1>
        <MainContainer />
      </div>
    );
  }
}

export default App;





