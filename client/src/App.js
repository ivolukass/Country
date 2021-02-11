import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.png';

import Countries from './components/Countries'
import Country from './components/Country'

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/'
});

class App extends Component {
  render() {
  return (
    <ApolloProvider client={client}>
    <Router>
    <div className="container">
      <img 
        src={logo} 
        alt="Logo" 
        style={{ width: 300, display: 'block', margin: 'auto' }} 
      />
      <Route exact path="/" component={Countries}/>
      <Route exact path="/country/:code" component={Country}/>
    </div>
    </Router>
    </ApolloProvider>
    );
  }
}

export default App;
