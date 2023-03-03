import { Navigate, Route, Router, useNavigate, useParams,Link } from "react-router-dom";
import Home from "./Home";
import styles from '../styles/user.module.css'
import { useEffect, useState } from "react";

const Update=(props)=> {
    let {users,updateContact}=props;
    console.log(props);
    const userId=useParams();  
    let user={};
    // let [user,setUser]=useState({});
    let [name,setName]=useState('');
    const [email,setEmail]=useState('');
    let updated=true;

    // useEffect(()=>{
        const gettingUser=()=>{
            users.map((usr) => {
                // console.log(usr);
                // console.log("usr.id ",typeof usr.id," userId.id ",typeof userId.id)
                if (usr.id === parseInt(userId.id)) {
                  const index = users.indexOf(usr);
                  console.log(index);
                //   setUser(...users[index])
                  user={...users[index]}
                  console.log("user ",user)
                //   users.splice(index, 1);
                }
              });
              updated=false;
        }
        gettingUser();
    // },[])
    const phoneChange=(e)=>{
        user.phone=e.target.value;
        console.log(user.phone," ",e.target.value)
    }
    const changeEmail=(e)=>{
        user.address.street=e.target.value;
        console.log(user.address.street," ",e.target.value)
    }
    const websiteChange=(e)=>{
        user.website=e.target.value;
        console.log(user.website," ",e.target.value)
    }
    const changeUpdatedStatus=(id,user)=>{
        updated=true;
        updateContact(id,user)
    }
    return (
        <div>
        {/* <div className={`button ${styles.viewBtn}`}>
          <Link to='/add-contact'>
           <button>Add Contact</button>  
          </Link> 
        </div> */}
        
        {/* {users.map((user)=>( */}
            <div key={`user-${user.id}`} className={styles.settings}>
            <div className={styles.imgContainer}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                alt=""
              />
            </div>
      
            <div className={styles.field}>
              <div className={styles.fieldLabel}>Name</div>
              <div className={styles.fieldValue}>{user.name}</div>
              <div className={styles.fieldLabel}>Email</div>
              <input type={email} placeholder={user.email} onChange={changeEmail}></input>
              {/* <div className={styles.fieldValue}>{user.email}</div> */}
              <div className={styles.fieldLabel}>User Name</div>
              <div className={styles.fieldValue}>{user.username}</div>
             
            </div>
            <div className={styles.field}>
            <div className={styles.fieldLabel}>Phone</div>
              <input type={"Text"} placeholder={user.phone} onChange={phoneChange}></input>
            <div className={styles.fieldLabel}>Website</div>
              <input type={"Text"} placeholder={user.website} onChange={websiteChange}></input>
            </div>
           
            <div className={styles.btnGrp}>
                <button className={`button ${styles.updateBtn}`} onClick={()=>{changeUpdatedStatus(userId.id,user)}}>Update</button>
            </div>
            <Link to={"/"}>
                 <button className={`button ${styles.saveBtn}`}>Back</button>  
            </Link>
          </div>
          
          {/* {updated?( <Link to={"/"}>
                 <button className={`button ${styles.saveBtn}`}>Back</button>  
              </Link> ):(null)} */}
      </div>

    )
}

export default Update;