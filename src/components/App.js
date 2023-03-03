import styles from "../styles/user.module.css";
import React, { useEffect, useState } from "react";
import "../index.css";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Update from "./Update";
import AddContact from "./AddContact";
import { useCustom } from "../hooks";

class App extends React.Component{
  
  constructor(){
    super();
    this.state={
      users:[],
    }
     this.API_URL = "https://jsonplaceholder.typicode.com/users";
     this.fetchUrl = async () => {
      let {users}=this.state;
      const response = await fetch(this.API_URL);
      const data = await response.json();
      console.log(data);
      data.map((user) => {
        users.push(user);
      });
      this.state.users=users;
      this.setState({
        ...this.state,
        users
      })
    };
    this.fetchUrl();
    this.updated=false
  }
//  let [users,setUsers]=useState([])
//  let [mainUsers,setMainUsers]=useState([])

//  const API_URL = "https://jsonplaceholder.typicode.com/users";


// useEffect(()=>{
//    const fetchUrl = async () => {
//     let usersArray = [];
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     console.log(data);
//     data.map((user) => {
//       usersArray.push(user);
//     });
//     setUsers(usersArray);
//   };
//   fetchUrl();
// },[])
// let mainUsers=[];
// setMainUsers(users);
// let changed=false;

// useEffect(()=>{
//   console.log("");
// },[changed])

  
addContact = async () => {
  let {users}=this.state;
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
      users
    })
  };
updateContact = async (userId,user) => {
    let {users}=this.state;
    console.log("App class ",user);
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
    users
   })
    alert("user updated successfully");
    <Navigate to="/" />
  };
deleteContact = async (userId) => {
  let {users}=this.state;
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
          alert(`${users[index].name} deleted successfully`)
          users.splice(index, 1);
        }
      });
    }
    this.setState({
      ...this.state,
      users
    })
    
  };

  componentDidMount(){
    this.setState({
      ...this.state,
    })
  }
  render(){
    let {users,updated}=this.state;
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
                  users={users}
                  updated={!updated}
                  updateContact={this.updateContact}
                />
              }
            />
            <Route
              path="/add-contact"
              element={
                <AddContact
                  users={users}
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
