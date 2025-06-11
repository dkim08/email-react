import LinkGenerator from "../Pages/Links";
import Email from "../Pages/Email";

export const paths = {
    EMAIL: {
        id: "Email",
        path: "/",
        label: "Email"
    },
    LINK_GENERATOR: {
        id: "Links",
        path: "/links",
        label: "Link Generator"
    },
};

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