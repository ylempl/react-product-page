import strings from './strings';
import NoMatchScreen from '../screens/NoMatch';
import AlbumScreen from '../screens/Album';
import Dashboard from '../screens/Dashboard';

export const routes = {
    index: '/',
    album: '/album',
};

export default [
    { path: routes.index, name: strings.dashboard, Component: Dashboard, roles: ['ROLE_ADMIN'] },
    { path: routes.album, name: strings.album, Component: AlbumScreen, roles: [] },
    { path: '*', name: '404', Component: NoMatchScreen, roles: [] },
];
