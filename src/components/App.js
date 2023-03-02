import styles from "../styles/user.module.css";
import React from "react";
import "../index.css";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Update from "./Update";
import AddContact from "./AddContact";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      home: false,
    };
    this.API_URL = "https://jsonplaceholder.typicode.com/users";
  }
  fetchUrl = async () => {
    let users = [];
    const response = await fetch(this.API_URL);
    const data = await response.json();
    console.log(data);
    data.map((user) => {
      users.push(user);
    });
    this.setState({
      ...this.state,
      users,
      home: true,
    });
  };
  addContact = async () => {
    let { users } = this.state;
    const response = await fetch(this.API_URL, {
      method: "POST",
      body: JSON.stringify({
        id: 11,
        name: "Sandy",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    users.push(data);
    this.setState({
      ...this.state,
      users,
      home: true,
    });
    // console.log("add data",data);
    // console.log(users);
  };
  updateContact = async (userId) => {
    let { users } = this.state;
    // console.log("userd id in App ",userId)
    const response = await fetch(`${this.API_URL}/${userId}`, {
      method: "PUT",
      body: JSON.stringify({
        id: 1,
        name: "Coding",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    // console.log("update data", data);
    // console.log("before updating the old user ", users);
    users.map((user) => {
      // console.log(user);
      if (user.id === userId) {
        const index = users.indexOf(user);
        // console.log(index);
        users[index] = data;
        // console.log(user);
      }
    });
     this.setState({
      ...this.state,
      users,
      home: true,
    });
    console.log("update ended");
  };
  deleteContact = async (userId) => {
    let { users } = this.state;
    const response = await fetch(`${this.API_URL}/${userId}`, {
      method: "DELETE",
    });
    // console.log(response);
    if (response.ok) {
      // console.log("if condition")
      users.map((user) => {
        if (user.id === userId) {
          const index = users.indexOf(user);
          // console.log(index);
          users.splice(index, 1);
        }
      });
    }
    this.setState({
      ...this.state,
      users,
      home: true,
    });
  };
  render() {
    let { users, home } = this.state;
    // console.log("users ",users)
    return (
      <div className="app">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  users={this.state.users}
                  home={this.state.home}
                  fetchUrl={this.fetchUrl}
                  addContact={this.addContact}
                  deleteContact={this.deleteContact}
                  updateContact={this.updateContact}
                />
              }
            />
            <Route
              path="/update/:id"
              element={
                <Update
                  users={this.state.users}
                  updateContact={this.updateContact}
                />
              }
            />
            <Route
              path="/add-contact"
              element={
                <AddContact
                  users={this.state.users}
                  addContact={this.addContact}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
