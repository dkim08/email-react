import { useState } from "react";
import SvgViewer from "../SvgViewer";
import './style.css';

const AddUserInput = ({ emailList, setEmailList }) => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes("@gmail.com") && !email.includes("@mail.com")) {
            return;
        }

        setEmailList([...emailList, { email, active: true }]);
        setEmail("");
    };

    return (
        <div className="email-container-header">
            <div className="user-container">
                <span>Добавить пользователя</span>
                <a href='#' className="link"><SvgViewer id={'iconLink'} />Скопировать</a>
            </div>
            <form className="add-email" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Invite others by name or by email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn" type="submit" onSubmit={handleSubmit}>
                    <SvgViewer id={'iconPerson'} action={() => console.log("click")} />
                    Пригласить
                </button>
            </form>
        </div>
    );
};

export default AddUserInput;
