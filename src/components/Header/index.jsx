import './style.css';
import SvgSelector from '../SvgSelector';
import { useNavigate } from "react-router";

const Header = () => {
    let navigate = useNavigate()
    return (
        <div className='header-container'>
            <header className='header'>
                <div className="logo-container">
                    <SvgSelector name="iconOne" action={() => navigate('/')} />
                </div>
                <div className="nav">
                    <div className="nav-button-container">
                        <SvgSelector name="iconCube" action={() => navigate('/')}/>
                    </div>
                    <div className="nav-button-container">
                        <SvgSelector name="iconCircle" action={() => navigate('/links')}/>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
