import React from 'react';
import {
    AppBar,
    Toolbar
} from '@material-ui/core';

const Menu = ({ children }: any) => {
    return (
        <AppBar position="static" color="default" elevation={0}>
            <Toolbar>
                {children}
            </Toolbar>
        </AppBar>
    );
};

export default Menu;
