import iconAdd from "../../assests/iconAdd.svg";
import iconBasket from "../../assests/iconBasket.svg";
import iconCircle from "../../assests/iconCircle.svg";
import iconCube from "../../assests/iconCube.svg";
import iconLink from "../../assests/iconLink.svg";
import iconOne from "../../assests/iconOne.svg";
import iconPerson from "../../assests/iconPerson.svg";
import iconRemove from "../../assests/iconRemove.svg";
import iconRename from "../../assests/iconRename.svg";
import arrowUp from "../../assests/arrowUp.svg"


const SvgSelector = ({name, action}) => {
    const handleAction = () => {
        if (action) {
            action();
        }
    }

    let iconAsset;

    switch (name) {
        case "arrowUp":
            iconAsset = arrowUp;
            break;
        case "iconAdd":
            iconAsset = iconAdd;
            break;
        case "iconBasket":
            iconAsset = iconBasket;
            break;
        case "iconCircle":
            iconAsset = iconCircle;
            break;
        case "iconCube":
            iconAsset = iconCube;
            break;
        case "iconLink":
            iconAsset = iconLink;
            break;
        case "iconOne":
            iconAsset = iconOne;
            break;
        case "iconPerson":
            iconAsset = iconPerson;
            break;
        case "iconRemove":
            iconAsset = iconRemove;
            break;
        case "iconRename":
            iconAsset = iconRename;
            break;
        default:
            iconAsset = (<></>)
            break;
    };
    return (
        <img src= {iconAsset} onClick={handleAction} alt="icon-image"/>
    );
};

export default SvgSelector;