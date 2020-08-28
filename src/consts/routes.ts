import HelloWorldScreen from '../screens/HelloWorld';
import PageScreen from '../screens/Page';
import NoMatchScreen from '../screens/NoMatch';

export const routes = {
    index: '/',
    page: '/page',
};

export default [
    { path: routes.index, name: 'Hello World', Component: HelloWorldScreen },
    { path: routes.page, name: 'Hello World Page', Component: PageScreen },
    { path: '*', name: '404', Component: NoMatchScreen },
];
