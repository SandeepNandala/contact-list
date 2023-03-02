import { Navigate, Route, Router, useNavigate, useParams } from "react-router-dom";
import Home from "./Home";

const Update=(props)=> {
    let {users,updateContact}=props;
    console.log(props);
    const userId=useParams();
    // console.log("userId ",userId.id);
    updateContact(userId.id);
    const navigate=useNavigate();
    return navigate('/');
}

export default Update;