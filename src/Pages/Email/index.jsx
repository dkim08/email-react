import { useState } from "react";
// import AddSvg from './assets/add.svg'
import SvgViewer from "../../SvgViewer";
import './style.css'



const Email = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emailList, setEmailList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.includes("@") && email.includes(".")) {
            setMessage("Некорректный email");
           
        }  
        
        setEmailList([...emailList, email]);
        setMessage("Email добавлен в список!");
        setEmail("");
    };

    return (
        <div className="email-container">
           <div className="user-container">
                <p>Добавить пользователя</p>
                <a className="link">Скопировать</a>
                <SvgViewer id={'iconRemove'} />
           </div>
            <div className="add-email" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Invite others by name or by email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                    <SvgViewer id={'iconAdd'} />
                    <button type="submit" onClick={handleSubmit}>Пригласить</button>
            </div>
            <p>{message}</p>
            <ul>
                {emailList.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </ul>
        </div>
    );
};

export default Email;
