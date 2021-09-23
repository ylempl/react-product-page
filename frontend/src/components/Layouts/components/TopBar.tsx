import React, { useState, FC } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
    AppBar,
    Paper,
    Badge,
    Box,
    Hidden,
    IconButton,
    InputBase,
    Toolbar,
    makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import InputIcon from '@material-ui/icons/Input';
import SearchIcon from '@material-ui/icons/Search';
import Logo from './Logo';

interface ITopBar {
    onMobileNavOpen?: any,
    main?: boolean
}

const useStyles = makeStyles(() => ({
    bar: {
        backround: 'white',
        border: '1px solid #D9D9D9'
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 200,
    },
    input: {
        flex: 1,
        marginLeft: '8px'
    },
    iconButton: {
        padding: 10,
    }
}));

const TopBar: FC<ITopBar> = ({
    onMobileNavOpen = false,
    main = false,
    ...rest
}) => {
    const [notifications] = useState([1, 2, 3]);
    const navigate = useNavigate();
    const classes = useStyles();

    return (
        <AppBar
            className={classes.bar}
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
                            <Paper component="form" className={classes.root}>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Search"
                                    inputProps={{ 'aria-label': 'search in store' }}
                                />
                                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                            <IconButton color="inherit">
                                <Badge
                                    badgeContent={notifications.length}
                                    color="secondary"
                                >
                                    <ShoppingCart />
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
