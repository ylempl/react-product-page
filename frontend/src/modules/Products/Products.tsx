import React, { FC } from 'react';
import {
    Box,
    Container,
    Grid,
    LinearProgress,
    makeStyles
} from '@material-ui/core';

import Page from '../../components/Page/Page';
import ProductCard from './components/ProductCard';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}));

interface IProducts {
    productData: any
}

const Products: FC<IProducts> = ({
    productData
}) => {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Products"
        >
            <Container maxWidth={false}>
                <Box mt={3}>
                    <Grid
                        container
                        spacing={3}
                    >

                        <Grid
                            item
                            lg={12}
                            md={12}
                            xs={12}
                        >
                            {productData.isFetching ? (
                                <LinearProgress />
                            ) : (
                                <ProductCard
                                    product={productData.data}
                                />
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Page>
    );
};

export default Products;
