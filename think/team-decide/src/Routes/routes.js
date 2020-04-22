import Html from "../html";
import Items from "../components/Items";

const Routes = [
    {
        component: Html,
        routes: [
            {
                path: '/decide/items',
                exact: true,
                component: Items,
            },
        ],
    },
];

export default Routes;