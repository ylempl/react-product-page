import React from 'react';
import {
    AppBar,
    Toolbar
} from '@material-ui/core';

const Menu = ({ children }: any) => {
    return (
        <AppBar position="relative">
            <Toolbar>
                {children}
            </Toolbar>
        </AppBar>
    );
};

export default Menu;
