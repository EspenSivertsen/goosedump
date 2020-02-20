import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';


export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="wrapper">
          <Home />
          <p>test</p>
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;
