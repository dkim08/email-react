import Layout from '../../Layout';
import Email from '../../Pages/Email';
import LinkGenerator from '../../Pages/Links';
import './style.css';


const App = () => {
    return (
            <Layout>
                <Email />
                {/* <LinkGenerator /> */}
            </Layout>
    );
};

export default App;