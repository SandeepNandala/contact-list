import React from "react";
import "../index.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Update from "./Update";
import AddContact from "./AddContact";
import { toast } from "react-hot-toast";

class App extends React.Component {
  constructor() {
    super();
    // initializing state
    this.state = {
      users: [],
    };
    // storing API url
    this.API_URL = "https://jsonplaceholder.typicode.com/users";
  }
  // fetching the url and assigning the users data to the state
  fetchUrl = async () => {
    let { users } = this.state;
    const response = await fetch(this.API_URL);
    const data = await response.json();
    data.map((user) => {
      users.push(user);
    });
    this.setState({
      ...this.state,
      users,
    });
  };

  // creating the new contact and sending the POST request to the URL
  addContact = async (user) => {
    let { users } = this.state;
    // sending the POST request
    const response = await fetch(this.API_URL, {
      method: "POST",
      body: JSON.stringify({
        ...user,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    // retrieving the data
    const data = await response.json();
    // as the request is a dummy call so pushing the new contact to our state
    users.push(data);
    this.setState({
      ...this.state,
      users,
    });
    // displaying the notification as new user added
    toast.success("contact added successfuly");
  };

  // updating the existing user and sending the PUT method request
  updateContact = async (userId, user) => {
    let { users } = this.state;
    // sending the PUT request with updated data
    const response = await fetch(`${this.API_URL}/${userId}`, {
      method: "PUT",
      body: JSON.stringify({
        ...user,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await response.json();
    // as it is a dummy call so updating the user in state
    users.map((user) => {
      if (user.id === userId) {
        const index = users.indexOf(user);
        users[index] = data;
      }
    });
    this.setState({
      ...this.state,
      users,
    });
    // displying the user updated notification
    toast.success("user updated successfully");
  };

  // deleting the existing user contact
  deleteContact = async (userId) => {
    let { users } = this.state;
    // sending the delete request to the URL
    const response = await fetch(`${this.API_URL}/${userId}`, {
      method: "DELETE",
    });
    // as it is a dummy call so once the request is successfull deleting the user from our state
    if (response.ok) {
      users.map((user) => {
        if (user.id === userId) {
          const index = users.indexOf(user);
          toast.success(`${users[index].name} deleted successfully`);
          users.splice(index, 1);
        }
      });
    }
    this.setState({
      ...this.state,
      users,
    });
  };

  componentDidMount() {
    // calling the fetchUrl method to fetch users from API url
    this.fetchUrl();
    this.setState({
      ...this.state,
    });
  }

  // rendering the APP component with multiple routes
  render() {
    let { users, updated } = this.state;
    return (
      <div className="app">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  users={users}
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
                <Update users={users} updateContact={this.updateContact} />
              }
            />
            <Route
              path="/add-contact"
              element={
                <AddContact users={users} addContact={this.addContact} />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
