import './style.css';
import SvgSelector from '../SvgSelector';
import {useEffect, useState} from 'react';
import { Link } from "react-router";
import { paths } from '../../utils/constants';
import { useNavigate, useLocation } from "react-router";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMobileSize, setIsMobileSize] = useState(window.innerWidth <= 820);
    const [isMobileMenuExpanded, setIsMobileMenuExpanded] = useState(false);
    const [activePage, setActivePage] = useState(paths.EMAIL.path);

    const routeHandle = (route) => {
        setActivePage(route);
        navigate(route);
    };

    const expandMenuHandle = () => {
        setIsMobileMenuExpanded(!isMobileMenuExpanded);
    }

    const DesktopNavigation = () => {
        return (
            <div className="nav">
                <div
                    className={`nav-button-container ${location.pathname === '/' ? 'active' : ''}`}
                    onClick={() => routeHandle('/')}
                >
                    <SvgSelector name="iconCube"/>
                </div>
                <div
                    className={`nav-button-container ${location.pathname === '/links' ? 'active' : ''}`}
                    onClick={() => routeHandle('/links')}
                >
                    <SvgSelector name="iconCircle"/>
                </div>
            </div>
        )
    }

    const MobileNavigation = () => {
        return (
            <div className="mobile-nav">
                <div
                    className={`nav-button-container`}
                    onClick={expandMenuHandle}
                >
                    {isMobileMenuExpanded ? <SvgSelector name="iconPerson"/> : <SvgSelector name="iconLink"/>}
                </div>

                {isMobileMenuExpanded && (
                    <div className={`mobile-nav-button-container`}>
                        <div
                            className={`nav-button-container ${location.pathname === '/' ? 'active' : ''}`}
                            onClick={() => routeHandle('/')}
                        >
                            <SvgSelector name="iconCube"/>
                        </div>
                        <div
                            className={`nav-button-container ${location.pathname === '/links' ? 'active' : ''}`}
                            onClick={() => routeHandle('/links')}
                        >
                            <SvgSelector name="iconCircle"/>
                        </div>
                    </div>
                )}
            </div>
        )
    }

    useEffect(() => {
        const isMobileHandle = () => {
            if (window.innerWidth <= 820) {
                setIsMobileSize(true);
                return;
            }
            setIsMobileSize(false);
        }

        window.addEventListener("resize", isMobileHandle);
        return () => window.removeEventListener("resize", isMobileHandle);
    }, []);

    return (
        <div className={'header-container'}>
            <header className={`${isMobileSize ? 'mobile-header' : 'header'}`}>
                <div className="logo-container">
                    <SvgSelector name="iconOne" action={() => navigate('/')}/>
                </div>
                {!isMobileSize && <DesktopNavigation/>}
                {isMobileSize && <MobileNavigation/>}
            </header>
        </div>
    );
};

export default Header;
