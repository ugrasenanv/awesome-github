import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./src/components/layout/Navbar";
import Search from "./src/components/users/Search";
import Users from "./src/components/users/Users";
import User from "./src/components/users/User";

import Alert from "./src/components/layout/Alert";
import About from "./src/components/pages/About";
import Home from './src/components/pages/Home';
import NotFound from './src/components/pages/NotFound';

 
import { render } from "react-dom";
import Hello from "./Hello";
import axios from "axios";
import "./style.css";

class App extends Component {
  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios.get("https://api.github.com/users");
    console.log("SearchUsers===>", response.data);
    this.setState({ users: response.data, loading: false });
  }
  constructor() {
    super();
    this.state = {
      name: "Awesome Github",
      users: [],
      user: {},
      loading: false
    };
    this.SearchUsers = this.SearchUsers.bind(this);
    this.clearUsers = this.clearUsers.bind(this);
    this.getUser = this.getUser.bind(this);
  }
  SearchUsers = async text => {
    this.setState({ loading: true });
    const responseData = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ users: responseData.data.items, loading: false });
    console.log("SearchUsers===>", responseData.data);
  };

// get single Github User details
  getUser = async (userName) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${userName}`
    );
    this.setState({ user: res.data, loading: false });
    console.log("getUser  ===>", res.data);
  };


  clearUsers = text => {
    var emptydata = [];
    console.log("clearUsers===>");
    this.setState({ users: emptydata, loading: false });
  };

  render() {
    const { users, user, loading  } =this.state;
    return (
      <Router>
        <div>
          <Navbar
            icon="https://avatars1.githubusercontent.com/u/36364057?s=460&v=4"
            title="Awesome Github"
          />
          <div className="container">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      SearchUsers={this.SearchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                    />
                    <Users
                      loading={loading}
                      users={users}
                    />
                  </Fragment>
                )}
              />
              <Route exact path='/' component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path='/user/:login' render={ props =>(
                  <User {...props} getUser={this.getUser} user={user} loading = {loading}/>
              )} />
              <Route component={NotFound} />
            
            </Switch>
          </div>
          <p>Start editing to see some magic happen :)</p>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
