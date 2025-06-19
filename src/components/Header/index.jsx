import './style.css';
import SvgSelector from '../SvgSelector';
import { useState } from 'react';
import { Link } from "react-router";
import { paths } from '../../utils/constants';
import { useNavigate, useLocation } from "react-router";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [activePage, setActivePage] = useState(paths.EMAIL.path);

    const routeHandle = (route) => {
        setActivePage(route);
        navigate(route);
    };

    return (
        <div className='header-container'>
            <header className='header'>
                <div className="logo-container">
                    <SvgSelector name="iconOne" action={() => navigate('/')} />
                </div>

                <div className="nav">
                    <div
                        className={`nav-button-container ${location.pathname === '/' ? 'active' : ''}`}
                        onClick={() => routeHandle('/')}
                    >
                        <SvgSelector name="iconCube" />
                    </div>
                    <div
                        className={`nav-button-container ${location.pathname === '/links' ? 'active' : ''}`}
                        onClick={() => routeHandle('/links')}
                    >
                        <SvgSelector name="iconCircle" />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
