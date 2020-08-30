import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
    List,
    ListItem
} from '@material-ui/core';
import routesConfig from '../../consts/routes';

export const StyledList = styled(List)`
    display: flex;

    li:last-of-type {
        display: none;
    }
`;

const MenuItems = () => {
    const history = useHistory();
    const selectedLink: string = history.location.pathname;

    return (
        <StyledList>
            {routesConfig.map(route => (
                <li key={route.path}>
                    <ListItem
                        button
                        component={RouterLink}
                        to={route.path}
                        selected={selectedLink === route.path}
                        divider
                    >
                        {route.name}
                    </ListItem>
                </li>
            ))}
        </StyledList>
    );
};

export default MenuItems;
