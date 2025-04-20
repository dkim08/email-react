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
          <div className="email-container-header">
             <div className="user-container">
                <span>Добавить пользователя</span>
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
          </div>
            <div className="user-list-container">
                <span>{message}</span>
                <ul>
                    {emailList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Email;
