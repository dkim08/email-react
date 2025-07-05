import { useState } from "react";
import SvgSelector from "../SvgSelector";
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
                <a href='#' className="link"><SvgSelector name={'iconLink'} />Скопировать</a>
            </div>
            <form className="add-email" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn" type="submit" onSubmit={handleSubmit}>
                    <SvgSelector name={'iconPerson'} action={() => console.log("click")} />
                    <span className="btn-text">Пригласить</span>
                </button>
            </form>
        </div>
    );
};

export default AddUserInput;
