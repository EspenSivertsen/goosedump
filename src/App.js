import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';


export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="wrapper margin-bot">
          <Home />
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;
