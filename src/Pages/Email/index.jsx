import { useState } from "react";
import SvgViewer from "../../SvgViewer";
import './style.css';

const Email = () => {
    const [message, setMessage] = useState("");
    const [emailList, setEmailList] = useState([]);



    const toggleActive = (index) => {
        const updatedList = emailList.map((item, i) =>
            i === index ? { ...item, active: !item.active } : item
        );
        setEmailList(updatedList);
    };

    const EmailHeader = () => {
        const [email, setEmail] = useState("");
        const handleSubmit = (e) => {
            e.preventDefault();

            if (!email.includes("@") || !email.includes(".")) {
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
                        <SvgViewer id={'iconPerson'} action={() => console.log("click")}/>
                        Пригласить
                    </button>
                </form>
            </div>
        );
    };

    const UserList = () => {
        const [selectedItemId, setSelectedItemId] = useState(null);

        const handleDeleteItem = () => {
            return (
                emailList.pop()
            )
        }

        return (
            <div className="user-list-container">
                <span>{message}</span>
                <ul className={"user-list-ul"} onMouseLeave={() => setSelectedItemId(null)}>
                    {emailList.map((item, index) => (
                        <li key={index} className="email-item" onMouseEnter={() => setSelectedItemId(index)}>
                            <div className="user-info-container">
                                <span>{item.email}</span>
                                <span>Role</span>

                                <div className="toggle-container">
                                    <label className="toggle-switch">
                                        <input
                                            type="checkbox"
                                            checked={item.active}
                                            onChange={() => toggleActive(index)}
                                        />
                                        <span className="slider" />
                                    </label>
                                </div>
                            </div>
                            <div className="user-menu-container">
                                { selectedItemId === index && (
                                    <SvgViewer id={'iconBasket'} action={handleDeleteItem} />
                                ) }
                                { selectedItemId === index && (
                                    <SvgViewer id={'iconRename'} />

                                ) }
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="email-container">
            <EmailHeader />
            <UserList />
        </div>
    )


};

export default Email;
