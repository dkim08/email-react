import './style.css';

const ActiveToggle = ({ index, setEmailList, emailList, item }) => {
    const toggleActive = (index) => {
        const updatedList = emailList.map((value, i) =>
            i === index ? { email: value.email, active: !value.active } : value
        );
        setEmailList(updatedList);
    };

    return (
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
    );
};

export default ActiveToggle;
