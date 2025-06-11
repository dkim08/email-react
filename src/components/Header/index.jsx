import './style.css';
import SvgSelector from '../SvgSelector';

const Header = () => {
    return (
        <div className='header-container'>
            <header className='header'>
                <div className="logo-container">
                    <SvgSelector name="iconOne" action={() => console.log('Главная страница')} />
                </div>
                <div className="nav">
                    <div className="nav-button-container">
                        <SvgSelector name="iconCube" action={() => console.log('Email Page')}/>
                    </div>
                    <div className="nav-button-container">
                        <SvgSelector name="iconCircle" action={() => console.log('Links Page')}/>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
