import './style.css';
import SvgViewer from '../SvgViewer';

const Header = () => {
    return (
        <div className='header-container'>
            <header className='header'>
                <div className="icon-container">
                    <SvgViewer id={'iconOne'} action={() => console.log('Главная страница')}/>
                </div>
                <div className="nav">
                    <button className='nav-btn' ><SvgViewer id={'iconCube'} /></button>
                    <button className='nav-btn'><SvgViewer id={'iconCircle'} /></button>
                </div>
            </header>
        </div>

    )
}

export default Header;