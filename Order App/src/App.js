import React from "react";
import "./styles.css";
import { testAPI, buyLargeAPI, buySmallAPI } from "./apis.js";
import SmallOrder from "./components/SmallOrder";
import LargeOrder from "./components/LargeOrder";
import CounterSmall from "./components/CounterSmall";
/*
Hello!

You're making a small module for a trading company. They want a simple 
component that connects to their existing trading API that can automatically
place large and small orders and keep a record of how many items were purchased.
Your API's are imported from api.js and will return Promises like a server

-Counters should only be incremented after an "api" responds with fulfilled:true.
-Small orders are fulfilled quickly
-Large orders are fulfilled slowly
-Do not modify the functions in api.js; 
-Two buttons, one to buy small and one to buy large
-Three counters of some form to show #small, #large, #total
-Ensure that the count is accurate and state-ful! 
  The hypothetical costs can be huge if there are extra orders!
-add extra test cases to guarantee working solution

*/

/*
Before you start, discuss the differences in these two setStates
Which is preferred and why? Where might one of these cause problems?

this.setState({
  counter: this.state.counter + this.props.increment,
});


this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));


*/

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      smallOrders: 0,
      largeOrders: 0,
      total: 0
    };
  }

  //Add functions here
  handleSmallOrder = () => {
    buySmallAPI().then((res) => {
      if (res.fulfilled) {
        this.setState({
          smallOrders: this.state.smallOrders + 1,
          largeOrders: this.state.largeOrders,
          total: this.state.largeOrders + this.state.smallOrders + 1
        });
      }
    });
  };
  handleLargeOrder = () => {
    buyLargeAPI().then((res) => {
      if (res.fulfilled) {
        this.setState({
          smallOrders: this.state.smallOrders,
          largeOrders: this.state.largeOrders + 1,
          total: this.state.largeOrders + this.state.smallOrders + 1
        });
      }
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Buy Buy Buy</h1>
        <div className="Buttons">
          <SmallOrder
            onClick={() => {
              this.handleSmallOrder();
            }}
          ></SmallOrder>
          <LargeOrder
            onClick={() => {
              this.handleLargeOrder();
            }}
          ></LargeOrder>
        </div>
        <div className="Counters">
          <CounterSmall count={this.state.smallOrders}></CounterSmall>
          <p>Number of Large orders: {this.state.largeOrders}</p>
          <p>Toatal number of orders:{this.state.total}</p>
        </div>
        <div className="Tests">{/* implement testing here if desired */}</div>
      </div>
    );
  }

  //suite of tests if desired
  testAPIOnClick = () => {
    testAPI().then((res) => {
      console.log(res);
    });
  };

  testManySmall = () => {
    for (let i = 0; i < 10; i++) {
      //function to buy small orders
    }
    //confirm that exactly 10 was added to small and total
  };

  testManyLarge = () => {
    for (let i = 0; i < 10; i++) {
      //function to buy small orders
    }
    //confirm that exactly 10 was added to large and total
  };

  testMixed = () => {
    "01100100010100100110".split("").forEach((e) => {
      if (e === "0") {
        //function to buy small orders
      } else {
        //function to buy large orders
      }
    });
    //confirm that exactly 12 was added to small, 8 to large, and 20 to total
  };
}

export default App;
