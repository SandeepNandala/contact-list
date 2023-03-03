import { useParams, Link } from "react-router-dom";
import styles from "../styles/user.module.css";

const Update = (props) => {
  // getting the users and Update user method from props
  let { users, updateContact } = props;
  // getting the user id from params
  const userId = useParams();
  let user = {};

  // retrieving the user from users by using user id
  const gettingUser = (userid) => {
    users.map((usr) => {
      if (usr.id === parseInt(userid)) {
        const index = users.indexOf(usr);
        user = { ...users[index] };
      }
    });
  };
  gettingUser(userId.id);

  // updating the existing user with new user details
  const updatingUsers = (user) => {
    users.map((usr) => {
      if (usr.id === parseInt(user.id)) {
        const index = users.indexOf(usr);
        users[index] = user;
      }
    });
  };
  // changing the phone number
  const phoneChange = (e) => {
    user.phone = e.target.value;
  };
  // updating the email
  const changeEmail = (e) => {
    user.email = e.target.value;
  };
  // updating the website
  const websiteChange = (e) => {
    user.website = e.target.value;
  };
  // once the required details entered calling the updateContact method
  const changeUpdatedStatus = (id, user) => {
    updateContact(id, user);
    updatingUsers(user);
  };

  return (
    <div>
      {/* displaying the user details along with edit  */}
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
          <input
            type="email"
            placeholder={user.email}
            onChange={changeEmail}
          ></input>
          <div className={styles.fieldLabel}>User Name</div>
          <div className={styles.fieldValue}>{user.username}</div>
        </div>
        <div className={styles.field}>
          <div className={styles.fieldLabel}>Phone</div>
          <input
            type="text"
            placeholder={user.phone}
            onChange={phoneChange}
          ></input>
          <div className={styles.fieldLabel}>Website</div>
          <input
            type="text"
            placeholder={user.website}
            onChange={websiteChange}
          ></input>
        </div>

        <div className={styles.btnGrp}>
          <button
            className={`button ${styles.updateBtn}`}
            onClick={() => {
              changeUpdatedStatus(userId.id, user);
            }}
          >
            Update
          </button>
        </div>
        {/* option to go back to home screen to check updated user */}
        <Link to={"/"} state={{ users: users }}>
          <button className={`button ${styles.saveBtn}`}>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Update;
