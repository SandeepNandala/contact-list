import { useState } from "react";

export function useCustom(InitialValue){
    let [value,setValue]=useState(InitialValue);
    function handleSubmit(e){
        e.preventDefault();
        setValue(e.target.vale)
    }
    return {
        value,
        onChange:handleSubmit,
    }
}

export function useApi(){
   let [users,setUsers]=useState([]);
    useEffect(()=>{
     const fetchUrl = async () => {
     let usersArray = [];
     const response = await fetch(API_URL);
     const data = await response.json();
     console.log(data);
     data.map((user) => {
       usersArray.push(user);
     });
     setUsers(usersArray);
     console.log("users ",users);
   };
   fetchUrl();
 },[])


 const addContact = async (body) => {
    // let { users } = this.state;
    const response = await fetch(API_URL, {
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
    // this.setState({
    //   ...this.state,
    //   users,
    //   home: true,
    // });
    // console.log("add data",data);
    // console.log(users);
  };
 const updateContact = async (userId,user) => {
    let { users } = this.state;
    console.log("userd id in App ",userId,"user ",user)
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
    alert("user updated successfully");
  };
  const deleteContact = async (userId) => {
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
 
}