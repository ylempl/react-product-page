import React from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {
    List,
    ListItem
} from '@material-ui/core';
import routesConfig from '../../consts/routes';
import roles from '../../consts/roles';

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
            {routesConfig.filter((p: any) => p.roles.some((r:any) => roles.includes(r))).map((route: any) => (
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
