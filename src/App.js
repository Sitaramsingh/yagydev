import React, { Component } from 'react';
import './App.css';
import TableData from './components/tablesData';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import ProductList from './components/USAAComponent/ProductList';
import CreateHelp from './components/CreateHelp/CreateHelp';
import DragDrop from './components/DragDropList/DragDropList'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            {/* <Route exact path='/' component={Home}/> */}
            <Route exact path='/dragDrop' component={DragDrop}/>
            <Route exact path='/createHelp' component={CreateHelp}/>
            <Route exact path ='/product' component={ProductList}></Route>
            <Route exact path='/' component={TableData}/>
          </Switch>
        </Router>       
      </div>
    );
  }
}

export default App;
