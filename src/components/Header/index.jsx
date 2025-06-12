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
                    <div className="nav-button-container">
                        <Link to={ paths.EMAIL.path }>
                            <SvgSelector name="iconCube" action={ () => console.log('Email Page') }/>
                        </Link>
                        <SvgSelector name="iconCube" action={() => navigate('/')}/>
                    </div>
                    <div className="nav-button-container">
                        <Link to={ paths.LINK_GENERATOR.path }>
                            <SvgSelector name="iconCircle" action={ () => console.log('Links Page') }/>
                        </Link>
                        <SvgSelector name="iconCircle" action={() => navigate('/links')}/>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
