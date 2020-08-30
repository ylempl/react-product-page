import AlbumScreen from '../screens/Album';
import SimplePage from '../screens/SimplePage';
import NoMatchScreen from '../screens/NoMatch';

export const routes = {
    index: '/',
    page: '/page',
};

export default [
    { path: routes.index, name: 'Album', Component: AlbumScreen },
    { path: routes.page, name: 'Simple Page', Component: SimplePage },
    { path: '*', name: '404', Component: NoMatchScreen },
];
