import React, { FC, useRef } from 'react';
import {
    Button,
    ListItem,
    makeStyles
} from '@material-ui/core';
import { NavLink as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    item: {
        display: 'flex',
        paddingTop: 0,
        paddingBottom: 0
    },
    button: {
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightMedium,
        justifyContent: 'flex-start',
        letterSpacing: 0,
        padding: '10px 8px',
        textTransform: 'none',
        width: '100%'
    },
    icon: {
        marginRight: theme.spacing(1)
    },
    title: {
        marginRight: 'auto'
    },
    active: {
        color: theme.palette.primary.main,
        '& $title': {
            fontWeight: theme.typography.fontWeightMedium
        },
        '& $icon': {
            color: theme.palette.primary.main
        }
    }
}));

interface INavItem {
    href: any,
    title: any,
    icon?: any
}

const NavItem: FC<INavItem> = ({
    href,
    title,
    icon: Icon
}) => {
    const classes = useStyles();
    const burgerMenu = useRef<HTMLDivElement>(null);
    if (burgerMenu.current) burgerMenu.current.focus();

    return (
        <ListItem
            className={classes.item}
            disableGutters
        >
            <Button
                className={classes.button}
                component={RouterLink}
                to={href}
            >
                {Icon && (
                    <Icon
                        className={classes.icon}
                        size="20"
                    />
                )}
                <span className={classes.title}>
                    {title}
                </span>
            </Button>
        </ListItem>
    );
};

export default NavItem;
