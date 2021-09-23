import React, { useState, FC } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
    AppBar,
    Badge,
    Box,
    Hidden,
    IconButton,
    Toolbar
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from './Logo';

interface ITopBar {
    onMobileNavOpen?: any,
    main?: boolean
}

const TopBar: FC<ITopBar> = ({
    onMobileNavOpen,
    main,
    ...rest
}) => {
    const [notifications] = useState([1, 2, 3]);
    const navigate = useNavigate();

    return (
        <AppBar
            elevation={0}
            {...rest}
        >
            <Toolbar>
                <RouterLink to="/">
                    <Logo />
                </RouterLink>
                {!main && (
                    <>
                        <Box flexGrow={1} />
                        <Hidden mdDown>
                            <IconButton color="inherit">
                                <Badge
                                    badgeContent={notifications.length}
                                    color="secondary"
                                >
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                            <IconButton
                                color="inherit"
                                onClick={() => navigate('/login', { replace: true })}
                            >
                                <InputIcon />
                            </IconButton>
                        </Hidden>
                        <Hidden lgUp>
                            <IconButton
                                color="inherit"
                                onClick={onMobileNavOpen}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
