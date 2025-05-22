import { useState } from "react";
import UserList from "../../components/UserList";
import AddUserInput from "../../components/AddUserInput";
import './style.css';

const Email = () => {
    // const [message] = useState("");
    const [emailList, setEmailList] = useState([]);

    return (
        <div className="email-container">
            <AddUserInput emailList={emailList} setEmailList={setEmailList} />
            <UserList emailList={emailList} setEmailList={setEmailList} />
        </div>
    )
};

export default Email;
