import { useState } from "react";
import SvgSelector from "../SvgSelector";
import './style.css';

const AddUserInput = ({ emailList, setEmailList }) => {
    const [email, setEmail] = useState("");

    const symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@._";

    const isValidEmail = (email) => {
        for (let i = 0; i < email.length; i++) {
            if (!symbols.includes(email[i])) {
                return false;
            }
        }

        const atCount = email.split("@").length - 1;
        if (atCount !== 1) return false;

        const [local, domain] = email.split("@");
        if (!domain || !domain.includes(".")) return false;

        const allowedDomains = ["@gmail.com", "@mail.com"];
        const isAllowedDomain = allowedDomains.some(domain => email.endsWith(domain));
        if (!isAllowedDomain) return false;

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isValidEmail(email)) {
            alert("Некорректный email.");
            return;
        }

        setEmailList([...emailList, { email, active: true }]);
        setEmail(""); 
    };

    return (
        <div className="email-container-header">
            <div className="user-container">
                <span>Добавить пользователя</span>
                <a href="#" className="link">
                    <SvgSelector name={'iconLink'} />Скопировать
                </a>
            </div>

            <form className="add-email" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn" type="submit">
                    <SvgSelector name={'iconPerson'} />
                    <span className="btn-text">Пригласить</span>
                </button>
            </form>
        </div>
    );
};

export default AddUserInput;
