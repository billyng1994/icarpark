import logo from './logo.svg';
import './App.css';
import React from 'react';
import HomePage from './component/HomePage';
import SearchResult from './component/SearchResult';
import SearchDetail from './component/SearchDetail';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render(){
      return (
<HashRouter>
            <Switch>
            <Route exact path="/">
              <Redirect to="/home"/>
            </Route>
            <Route exact path="/home">
                <HomePage/>
              </Route>
              <Route exact path="/searchresult">
                
                <SearchResult />
              </Route>
              <Route exact path="/searchdetail">
                <SearchDetail/>
              </Route>
              
            </Switch>
          </HashRouter>
    );
  }
  
}

export default App;
