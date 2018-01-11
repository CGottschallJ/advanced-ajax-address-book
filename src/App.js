import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from 'react-redux';
import {loadUsers} from "./actions";
import UserDetailContainer from "./containers/UserDetailContainer";
import ListOfUsersContainer from "./containers/ListOfUsersContainer";
import SearchBox from "./components/SearchBox";

class App extends Component {
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    this.props.loadUsers();
  }
  render(){
    return (
      <div>
        <SearchBox />
        <ListOfUsersContainer />
        <UserDetailContainer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    loadUsers:function(user){
      dispatch(loadUsers(user));
    }
  }
}

export default connect(null,mapDispatchToProps)(App);
