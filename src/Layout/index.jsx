import Header from '../components/Header';
import './style.css';

const Layout = ( {children} ) => {
    return (
        <div>
            <Header />
            <div>
                {children}
            </div>
        </div>
    );
};

export default Layout;