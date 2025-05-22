import './style.css';
import SvgViewer from '../SvgViewer';

const Header = () => {
    return (
        <div className='header-container'>
            <header className='header'>
                <div className="icon-container">
                    <SvgViewer id={'iconOne'}/>
                </div>
                <div className="nav">

                </div>
            </header>
        </div>

    )
}

export default Header;