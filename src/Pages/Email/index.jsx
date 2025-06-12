import { useState } from "react";
import UserList from "../../components/UserList";
import AddUserInput from "../../components/AddUserInput";
import Layout from "../../Layout";
import './style.css';

const Email = () => {
    // const [message] = useState("");
    const [emailList, setEmailList] = useState([]);

    return (
        <Layout>
            <div className="wrapper">
                <div className="email-container">
                    <AddUserInput emailList={emailList} setEmailList={setEmailList} />
                    <UserList emailList={emailList} setEmailList={setEmailList} />
                </div>
            </div>
        </Layout>
    )
};

export default Email;
