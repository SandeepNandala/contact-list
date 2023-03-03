import { Navigate, Route, Router, useNavigate, useParams,Link } from "react-router-dom";
import Home from "./Home";
import styles from '../styles/user.module.css'
import { useEffect, useState } from "react";

const AddContact=(props)=> {
  const navigate=useNavigate();
    let {users,addContact}=props;
    console.log(props);
    // console.log(users[users.length-1]);
    let userId=users[users.length-1].id
    // const userId=useParams();  
    let user={};
    // let [user,setUser]=useState({});
    // let [name,setName]=useState('');
    // const [email,setEmail]=useState('');

    // useEffect(()=>{
        // const gettingUser=(userid)=>{
        //     users.map((usr) => {
        //         // console.log(usr);
        //         // console.log("usr.id ",typeof usr.id," userId.id ",typeof userId.id)
        //         if (usr.id === parseInt(userid)) {
        //           const index = users.indexOf(usr);
        //           // console.log(index);
        //         //   setUser(...users[index])
        //           user={...users[index]}
        //           console.log("user ",user)
        //         //   users.splice(index, 1);
        //         }
        //       });
        //       updated=false;
        // }
        // gettingUser(userId.id);
    // const updatingUsers=(user)=>{
    //   users.map((usr) => {
    //     if (usr.id === parseInt(user.id)) {
    //       const index = users.indexOf(usr);
    //       // console.log(index);
    //     //   setUser(...users[index])
    //       users[index]=user;
    //       // user={...users[index]}
    //       // console.log("user ",user)
    //     //   users.splice(index, 1);
    //     }
    //   });
    // }
    // },[])
    // adding default address and company values
    user.adress={
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        }
    user.company={
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        }
   user.id=userId+1;
    const addName=(e)=>{
        user.name=e.target.value;
    }
    const addEmail=(e)=>{
        user.email=e.target.value;
    }
    // const addId=(e)=>{
    //     user.id=e.target.value
    // }
    const addUserName=(e)=>{
        user.username=e.target.value
    }
    const addPhone=(e)=>{
        user.phone=e.target.value
    }
    const addWebsite=(e)=>{
        user.website=e.target.value
    }
    const changeUpdatedStatus=(user)=>{
        // updated=true;
        addContact(user)
    //    users.push(user)
    }
    return (
        <div>
        {/* <div className={`button ${styles.viewBtn}`}>
          <Link to='/add-contact'>
           <button>Add Contact</button>  
          </Link> 
        </div> */}
        
        {/* {users.map((user)=>( */}
        {/* {!updated?(  <div key={`user-${user.id}`} className={styles.settings}> */}
       <div className={styles.settings}>
            <div className={styles.imgContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                alt=""
              />
            </div>
      
            <div className={styles.field}>
              <div className={styles.fieldLabel}>Name</div>
              <input type="text" placeholder="Enter Name" onChange={addName} required></input>
              <div className={styles.fieldLabel}>Email</div>
              <input type="email" placeholder="Enter Email" onChange={addEmail} required></input>
              {/* <div className={styles.fieldValue}>{user.email}</div> */}
              <div className={styles.fieldLabel}>User Name</div>
              <input type="text" placeholder="Enter User Name" onChange={addUserName} required></input>
            
            <div className={styles.fieldLabel}>Phone</div>
              <input type="number" placeholder="enter your phone number" onChange={addPhone} required></input>
            <div className={styles.fieldLabel}>Website</div>
              <input type="text" placeholder="enter your website" onChange={addWebsite} required></input>
            </div>
           
            <div className={styles.btnGrp}>
                <button className={`button ${styles.updateBtn}`} onClick={()=>{changeUpdatedStatus(user)}}>Add Contact</button>
            </div>
            
            <Link to={"/"} state={{users:users}}>
                 <button className={`button ${styles.saveBtn}`}>Back</button>  
            </Link>
          </div>
      </div>

    )
}

export default AddContact;