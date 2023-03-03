import React from "react";
import styles from '../styles/user.module.css'
import { Link } from "react-router-dom";
const Home=(props)=>{
    let {users,addContact,updateContact,deleteContact}=props;
    let home=true;
      return (
        <div>
          <div className={`button ${styles.viewBtn}`}>
            <Link to='/add-contact'>
             <button>Add Contact</button>  
            </Link> 
          </div>
          
          {users.map((user)=>(
              <div key={`user-${user.id}`} className={styles.settings}>
              <div className={styles.imgContainer}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
                  alt=""
                />
              </div>
        
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Email</div>
                <div className={styles.fieldValue}>{user.email}</div>
              </div>
              <div className={styles.field}>
                <div className={styles.fieldLabel}>Name</div>
                <div className={styles.fieldValue}>{user.name}</div>
              </div>
             
              <div className={styles.btnGrp}>
                <Link to={`/update/${user.id}`}>
                   <button className={`button ${styles.updateBtn}`}>Update</button>  
                </Link> 
                  <button className={`button ${styles.deleteBtn}`} onClick={()=>{deleteContact(user.id)}}>Delete</button>
              </div>
            </div>)
           )}
        </div>
      ) 
}

export default Home;