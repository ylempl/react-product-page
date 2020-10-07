import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
    const [selectedLink, setSelectedLink] = useState(history.location.pathname);

    const handleClick = (path: string) => {
        history.push(path);
        setSelectedLink(path);
    };

    return (
        <StyledList>
            {routesConfig.filter((p: any) => p.roles.some((r:any) => roles.includes(r))).map((route: any) => (
                <li key={route.path}>
                    <ListItem
                        button
                        onClick={() => handleClick(route.path)}
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
