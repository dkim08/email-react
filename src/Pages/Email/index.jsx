import { useState } from "react";
import './style.css'

const Email = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailList, setEmailList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.includes("@") && email.includes(".")) {
            setEmailList([...emailList, email]);
            setMessage("Email добавлен в список!");
            setEmail("");
        } else {
            setMessage("Некорректный email");
        }
    };

    return (
        <div className="email-container">
           <div className="user-container">
                <p>Добавить пользователя</p>
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
            <p>{message}</p>
            <h2>Список email:</h2>
            <ul>
                {emailList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Email;
