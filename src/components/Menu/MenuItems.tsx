import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import {
    List,
    ListItem
} from '@material-ui/core';
import { routes } from '../../consts/routes';

const MenuItems = () => {
    const history = useHistory();
    const selectedLink: string = history.location.pathname;

    return (
        <section>
            <List component="nav">
                <ListItem
                    button
                    component={RouterLink}
                    to={routes.index}
                    selected={selectedLink === routes.index}
                    divider
                >
                    Start
                </ListItem>
                <ListItem
                    button
                    component={RouterLink}
                    to={routes.page}
                    selected={selectedLink === routes.page}
                    divider
                >
                    Page
                </ListItem>
            </List>
        </section>
    );
};

export default MenuItems;
