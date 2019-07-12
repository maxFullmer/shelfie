import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Form from './Components/Form/Form.js';
import Header from './Components/Header/Header.js';
import Product from './Components/Product/Product.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Switch>
          <Route component={Dashboard} exact path="/" />
          <Route component={Form} path="/add" />
          <Route component={Form} path="/edit/:id" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
