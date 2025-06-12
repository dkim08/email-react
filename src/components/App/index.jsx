// import Layout from '../../Layout';
import Email from '../../Pages/Email';
import LinkGenerator from '../../Pages/Links';
import { RouterProvider } from "react-router";
import router from "../../router/index";
import './style.css';


const App = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default App;