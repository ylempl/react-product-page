import React from 'react';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    colors,
    makeStyles
} from '@material-ui/core';
import {
    ArrowUpward,
    People
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    avatar: {
        backgroundColor: colors.green[600],
        height: 56,
        width: 56
    },
    differenceIcon: {
        color: colors.green[900]
    },
    differenceValue: {
        color: colors.green[900],
        marginRight: theme.spacing(1)
    }
}));

const TotalCustomers = () => {
    const classes = useStyles();

    return (
        <Card>
            <CardContent>
                <Grid
                    container
                    justifyContent="space-between"
                    spacing={3}
                >
                    <Grid item>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="h6"
                        >
                            TOTAL CUSTOMERS
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h3"
                        >
                            1,600
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar}>
                            <People />
                        </Avatar>
                    </Grid>
                </Grid>
                <Box
                    mt={2}
                    display="flex"
                    alignItems="center"
                >
                    <ArrowUpward className={classes.differenceIcon} />
                    <Typography
                        className={classes.differenceValue}
                        variant="body2"
                    >
                        16%
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="caption"
                    >
                        Since last month
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

export default TotalCustomers;
