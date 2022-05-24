import React, { useState } from "react";
import './App.css';
import Navbar from './Components/nav';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserContext from './pages/User.js';
import LogContext from './pages/Log.js';
import OrderContext from './pages/Order.js';
import CreateAccount from "./Components/CreateAccount";
import Login from "./Components/login";
import Game_content from "./Components/Home";
import PopupCart from "./Components/ShoppingCart";
import LogOut from "./Components/LogOut";
import refreshIcon from './refresh2.png';


class App extends React.Component {
  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);

    //user state for keeping user info avaliable through the pages.
    this.user = {
      name: '',
      shoppingList: [''
      ],
      checkoutItems: '',
      totalFees: null
    };
    //authentication state for keeping user session info avaliable through the pages.
    this.authenticated = { nameS: false };

    // order number state for generation new order id for every new order.
    this.order = { number: Math.random()*10 };
  };

  //force update for UI after log in
  forceUpdateHandler() {
    this.forceUpdate();
  };



  render() {
    return (
      <LogContext.Provider value={this.authenticated}>
        <UserContext.Provider value={this.user}>
          <OrderContext.Provider value={this.order}>
            <h1  test_id_1="1"> </h1>
            <input type="image" className="icon-btnn" onClick={this.forceUpdateHandler} src={refreshIcon}></input>
            <Router>
              <Navbar />
              <Switch>
                <Route path='/' exact component={Game_content} />
                <Route path='/CreateAccount' component={CreateAccount} />
                <Route path='/login' component={Login} />
                <Route path='/shopping' exact component={PopupCart} />
                <Route path='/loggedInUser' exact component={LogOut} />
              </Switch>
            </Router>
          </OrderContext.Provider>
        </UserContext.Provider>
      </LogContext.Provider>
    );
  }
}


export default App;