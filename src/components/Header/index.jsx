import './style.css';
import SvgSelector from '../SvgSelector';
import { Link } from "react-router";
import { paths } from '../../utils/constants';

import { useNavigate } from "react-router";

const Header = () => {
    let navigate = useNavigate()
    return (
        <div className='header-container'>
            <header className='header'>
                <div className="logo-container">
                    <SvgSelector name="iconOne" action={ () => console.log('Главная страница') } />
                    <SvgSelector name="iconOne" action={() => navigate('/')} />
                </div>
                <div className="nav">
                    <div className="nav-button-container" onClick= {() => navigate('/')}>
                        <SvgSelector name="iconCube" />
                    </div>
                    <div className="nav-button-container" onClick= {() => navigate('/links')}>
                        <SvgSelector name="iconCircle" />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
