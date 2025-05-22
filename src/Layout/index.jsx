import Header from '../components/Header';
import './style.css';

const Layout = ( {children} ) => {
    return (
        <div className='layout-container'>
            <Header />
            <div className='default-layout-children'>
                {children}
            </div>
        </div>
    );
};

export default Layout;