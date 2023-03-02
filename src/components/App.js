import styles from '../styles/user.module.css'

const App = () => {
  const API_URL="https://jsonplaceholder.typicode.com/users"
  let users=[];
  const fetchUrl = async () => {
    const response = await fetch(API_URL);
    const data =await response.json();
    console.log(data);
    // users.push(data);
    data.map((user)=>{
      users.push(user);
    })
    console.log("users ",users);
  };
  fetchUrl();
  const addContact = async () => {
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
    const data=await response.json();
    users.push(data);
    console.log("add data",data);
    console.log(users);
  };
  const updateContact = async (userId) => {
    const response = await fetch(`${API_URL}/${userId}`, {
      method: "PUT",
      body: JSON.stringify({
        id:1,
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
    const data=await response.json();
    console.log("update data",data);
    console.log("before updating the old user ",users);
    users.map((user)=>{
      // console.log(user);
      if(user.id===userId)
        {
          const index=users.indexOf(user);
          console.log(index);
          users[index]=data;
          console.log(user);
        }
    })
    // users.push(data);
    console.log("after updating the user ",users);
    // users=users.filter((user)=>user!=userId);
    // users.push(data);
    // console.log(users);
    
  };
  const deleteContact=async(userId)=>{
    const response = await fetch(`${API_URL}/${userId}`,{
      method:"DELETE",
    });
    console.log(response);
    if(response.ok){
      console.log("if condition")
      users.map((user)=>{
        if(user.id===userId)
          {
            const index=users.indexOf(user);
            console.log(index);
            users.splice(index,1);
          }
      })
    }
    // const data = await response.json();
    console.log("users after delete",users);
    // const index=users.indexOf(data);
    // delete users[index];
    
  }
  // addContact();
  // updateContact(1);
  deleteContact(3);
  // fetchUrl();
  return (
    <div className="app">
      <p>{users}</p>
      {users.map((user)=>(
         <div className={styles.settings}>
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
             <button className={`button ${styles.saveBtn}`}>Delete</button>
             <button className={`button ${styles.saveBtn}`}>Update</button>
         </div>
       </div>)
      )}
    {/* <div className={styles.settings}>
      <div className={styles.imgContainer}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
          alt=""
        />
      </div>

      <div className={styles.field}>
        <div className={styles.fieldLabel}>Email</div>
        <div className={styles.fieldValue}>Sincere@april.biz</div>
      </div>
      <div className={styles.field}>
        <div className={styles.fieldLabel}>Name</div>
        <div className={styles.fieldValue}>Leanne Graham</div>
      </div>

      <div className={styles.btnGrp}>
          <button className={`button ${styles.saveBtn}`}>Delete</button>
          <button className={`button ${styles.saveBtn}`}>Update</button>
      </div>
    </div> */}
    </div>
  );
};  

export default App;
