import LinkGenerator from "../Pages/Links";
import Email from "../Pages/Email";
import { paths } from "../utils/constants";

const routes = [
    {
        path: paths.EMAIL.path,
        element: <Email />,
    },
    {
        path: paths.LINK_GENERATOR.path,
        element: <LinkGenerator />,
    },
];

export default routes;