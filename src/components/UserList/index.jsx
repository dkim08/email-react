import { useState } from "react";
import SvgSelector from "../SvgSelector";
import ActiveToggle from "../ActiveToggle";

import './style.css';


const UserList = ({ emailList, setEmailList }) => {
    console.log(emailList)
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleDeleteItem = (index) => {
        setEmailList(
            emailList.filter((value, index_id) => index_id !== index)
        );
    };

    return (
        <div className="user-list-container">
            {emailList.length === 0 ? (
                <div className="no-users">Не добавлено ни одного пользователя</div>
            ) : (
                <ul className="user-list-ul" onMouseLeave={() => setSelectedItemId(null)}>
                    {emailList.map((item, index) => (
                        <li key={index} className="email-item" onMouseEnter={() => setSelectedItemId(index)}>
                            <div className="user-info-container">
                                <span className="email-text">{item.email}</span>
                                <span>Role</span>
                                <ActiveToggle index={index} emailList={emailList} setEmailList={setEmailList} item={item} />
                            </div>

                            <div className="user-menu-container">
                                {selectedItemId === index && (
                                    <>
                                        <SvgSelector name={'iconBasket'} action={() => handleDeleteItem(index)} />
                                        <SvgSelector name={'iconRename'} action={() => console.log('Нажата кнопка rename')} />
                                    </>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;