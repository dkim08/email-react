import { useState } from "react";
import SvgViewer from "../../SvgViewer";
import './style.css';

const Email = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailList, setEmailList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes("@") || !email.includes(".")) {
            setMessage("Некорректный email");
            return;
        }

        setEmailList([...emailList, { email, active: true }]);
        setMessage("Email добавлен в список!");
        setEmail("");
    };

    const toggleActive = (index) => {
        const updatedList = emailList.map((item, i) =>
            i === index ? { ...item, active: !item.active } : item
        );
        setEmailList(updatedList);
    };

    return (
        <div className="email-container">
            <div className="email-container-header">
                <div className="user-container">
                    <span>Добавить пользователя</span>
                    <a className="link">Скопировать</a>
                </div>
                <form className="add-email" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Invite others by name or by email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <button type="submit">Пригласить</button>
                </form>
            </div>
            <div className="user-list-container">
                <span>{message}</span>
                <ul>
                    {emailList.map((item, index) => (
                        <li key={index} className="email-item">
                            <span>{item.email}</span>
                            <label className="toggle-switch">
                                <input 
                                    type="checkbox" 
                                    checked={item.active} 
                                    onChange={() => toggleActive(index)} 
                                />
                                <span className="slider" />
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Email;
 