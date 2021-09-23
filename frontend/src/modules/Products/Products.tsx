import React, { FC } from 'react';
import {
    Box,
    Container,
    Grid,
    LinearProgress,
    Divider,
    Typography,
    List,
    ListItem,
    makeStyles
} from '@material-ui/core';

import Page from '../../components/Page/Page';
import Toolbar, { IQuery } from './components/Toolbar';
import ProductCard from './components/ProductCard';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100%',
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(3)
    }
}));

interface IProducts {
    productData: any,
    drupalProductData: any,
    handleOnSearch: any,
    handleChange: any,
    query: IQuery
}

const Products: FC<IProducts> = ({
    productData,
    drupalProductData,
    handleOnSearch,
    handleChange,
    query
}) => {
    const classes = useStyles();

    // console.warn('PIM', productData);
    // console.warn('Drupal', drupalProductData);

    return (
        <Page
            className={classes.root}
            title="Products"
        >
            <Container maxWidth={false}>
                <Toolbar
                    handleOnSearch={handleOnSearch}
                    handleChange={handleChange}
                    query={query}
                />
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
                            {productData.isFetching || drupalProductData.isFetching ? (
                                <LinearProgress />
                            ) : (
                                <ProductCard
                                    product={productData.data}
                                    drupalData={drupalProductData.data}
                                />
                            )}
                        </Grid>
                        {/* <Grid
                            item
                            lg={6}
                            md={6}
                            xs={6}
                        >
                            {drupalProductData.isFetching ? (
                                <LinearProgress />
                            ) : (
                                <>
                                    {drupalProductData.data.length !== 0 && (
                                        <List>
                                            <ListItem>
                                                <Box display="flex" justifyContent="space-between" flex={1}>
                                                    <Typography variant="h4">Drupal</Typography>
                                                </Box>
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <Box display="flex" justifyContent="space-between" flex={1}>
                                                    <Typography variant="button">Id:</Typography>
                                                    <Typography>{drupalProductData.data[0].field_p_inriver_id}</Typography>
                                                </Box>
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <Box display="flex" justifyContent="space-between" flex={1}>
                                                    <Typography variant="button">Title:</Typography>
                                                    <Typography>{drupalProductData.data[0].title}</Typography>
                                                </Box>
                                            </ListItem>
                                            <Divider />
                                            <ListItem>
                                                <Box display="flex" justifyContent="space-between" flex={1}>
                                                    <Typography variant="button">Resource Documents:</Typography>
                                                    <Typography>{drupalProductData.data[0].field_p_documents.length}</Typography>
                                                </Box>
                                            </ListItem>
                                            <Divider />
                                        </List>
                                    )}
                                </>
                            )}
                        </Grid> */}
                    </Grid>
                </Box>
            </Container>
        </Page>
    );
};

export default Products;
