import './style.css';
import Layout from '../../Layout';
import Email from '../../Pages/Email';
import LinkGenerator from '../../Pages/Links';

const App = () => {
    return (
        <div>
            <Layout>
                <Email />
                {/* <LinkGenerator /> */}
            </Layout>
        </div>
    );
};

export default App;