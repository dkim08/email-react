import './style.css';
import SvgViewer from '../SvgViewer';

const Header = () => {
    return (
        <div className='header-container'>
            <header className='header'>
                <div className="logo-container">
                    <SvgViewer id={'iconOne'} action={() => console.log('Главная страница')}/>
                </div>
                <div className="nav">
                    <div className="nav-button-container">
                        <SvgViewer id={'iconCube'} />
                    </div>
                    <div className="nav-button-container">
                        <SvgViewer id={'iconCircle'} />
                    </div>
                    {/*<button className='nav-btn' ><SvgViewer id={'iconCube'} /></button>*/}
                    {/*<button className='nav-btn'><SvgViewer id={'iconCircle'} /></button>*/}
                </div>
            </header>
        </div>

    )
}

export default Header;