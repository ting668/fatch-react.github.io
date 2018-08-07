import React, { Component } from 'react';
import { HashRouter, Redirect,Route, Switch } from "react-router-dom";
import './App.css';
import ListBox from "./ListBox"
import Detail from './Detail'


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="top-nav">
          <ul>
            <li>首页</li>
            <li>新手入门</li>
            <li>API</li>
            <li>关于</li>
          </ul>
        </div>
        <div className="content-nav">
          <ul>
            <li>全部</li>
            <li>精华</li>
            <li>分享</li>
            <li>问答</li>
          </ul>
        </div>
        <div className="content-list">

          <HashRouter>
            <div>
              <Switch>
                <Route path="/list/:current" component={ListBox} ></Route>
                <Route path="/detail/:detail" component={Detail} ></Route>
              
            <Redirect from="/" to="/list/1" /> 
              </Switch>
            </div>
          </HashRouter>
        </div>
      </div>

    )
  }
}

export default App;
