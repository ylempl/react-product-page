import React, { FC } from 'react';
import {
    Button,
    CssBaseline,
    Grid,
    Typography,
    Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IAlbum } from './Album.types';
import AlbumItem from './AlbumItem';

const useStyles = makeStyles((theme) => ({
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

const Album: FC<IAlbum> = ({
    albumData
}) => {
    const classes = useStyles();

    return (
        <>
        <CssBaseline />
        <main>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Album layout
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Something short and leading about the collection below—its contents, the creator, etc.
                    Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                    entirely.
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                        <Button variant="contained" color="primary">
                            Main call to action
                        </Button>
                        </Grid>
                        <Grid item>
                        <Button variant="outlined" color="primary">
                            Secondary action
                        </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
            <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
                <Grid container spacing={4}>
                    {albumData.map((album) => (
                        <AlbumItem key={album.id} album={album} />
                    ))}
                </Grid>
            </Container>
        </main>
        </>
    );
};

export default Album;
