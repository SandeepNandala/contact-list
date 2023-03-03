import { Link } from "react-router-dom";
import styles from "../styles/user.module.css";

const AddContact = (props) => {
  // getting users and addContact method from props
  let { users, addContact } = props;
  // finding the last user id
  let userId = users[users.length - 1].id;
  let user = {};
  // adding default address and company values
  user.adress = {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  };
  user.company = {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  };
  // assigning the new user id
  user.id = userId + 1;
  // adding name
  const addName = (e) => {
    user.name = e.target.value;
  };
  // adding Email
  const addEmail = (e) => {
    user.email = e.target.value;
  };
  // adding userName
  const addUserName = (e) => {
    user.username = e.target.value;
  };
  // adding Phone
  const addPhone = (e) => {
    user.phone = e.target.value;
  };
  // adding the website
  const addWebsite = (e) => {
    user.website = e.target.value;
  };
  // one's the required details are enterded calling the add Contact method
  const changeUpdatedStatus = (user) => {
    addContact(user);
  };
  return (
    <div>
      <div className={styles.settings}>
        <div className={styles.imgContainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png"
            alt=""
          />
        </div>
        {/* displaying the user input fields to create new user  */}
        <div className={styles.field}>
          <div className={styles.fieldLabel}>Name</div>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={addName}
            required
          ></input>
          <div className={styles.fieldLabel}>Email</div>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={addEmail}
            required
          ></input>
          <div className={styles.fieldLabel}>User Name</div>
          <input
            type="text"
            placeholder="Enter User Name"
            onChange={addUserName}
            required
          ></input>

          <div className={styles.fieldLabel}>Phone</div>
          <input
            type="number"
            placeholder="enter your phone number"
            onChange={addPhone}
            required
          ></input>
          <div className={styles.fieldLabel}>Website</div>
          <input
            type="text"
            placeholder="enter your website"
            onChange={addWebsite}
            required
          ></input>
        </div>

        <div className={styles.btnGrp}>
          <button
            className={`button ${styles.updateBtn}`}
            onClick={() => {
              changeUpdatedStatus(user);
            }}
          >
            Add Contact
          </button>
        </div>
        {/* back button to check the new user */}
        <Link to={"/"} state={{ users: users }}>
          <button className={`button ${styles.saveBtn}`}>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default AddContact;
