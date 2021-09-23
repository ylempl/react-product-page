import React, { FC } from 'react';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Divider,
    Typography,
    List,
    ListItem,
    makeStyles
} from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';

interface IProductCard {
    product: any,
    drupalData: any
}

const ProductCard: FC<IProductCard> = ({ product, drupalData }) => {
    console.log(drupalData.title)

    return (
        <>
            {(product.length !== 0 || drupalData.length !== 0) && (
                // <Card
                //     className={classes.root}
                // >
                //     <CardHeader
                //         title={product.ProductTradeName[0].en}
                //         subheader={product.updated_at}
                //     />
                //     <CardMedia
                //         image={product.MainImage}
                //         className={classes.media}
                //         title={product.ProductTradeName[0].en}
                //     />
                //     <CardContent>
                //         <List>
                //             <ListItem>
                //                 <Box display="flex" justifyContent="space-between" flex={1}>
                //                     <Typography variant="button">Resource Documents:</Typography>
                //                     <Typography>{product.ResourceDocuments.length}</Typography>
                //                 </Box>
                //             </ListItem>
                //             <Divider />
                //         </List>
                //     </CardContent>
                // </Card>
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid
                        rows={
                            [
                                {
                                    id: 0, api: 'Drupal', title: drupalData[0].title, resDocs: drupalData[0].field_p_documents.length
                                },
                                {
                                    id: 1, api: 'PIM API', title: product.ProductTradeName[0].en, resDocs: product.ResourceDocuments.length
                                },
                            ]
                        }
                        columns={
                            [
                                {
                                    field: 'api',
                                    headerName: 'API',
                                    type: 'singleSelect',
                                    width: 125
                                },
                                {
                                    field: 'title',
                                    headerName: 'Title',
                                    type: 'singleSelect',
                                    width: 125
                                },
                                {
                                    field: 'resDocs',
                                    headerName: 'Docs count',
                                    type: 'singleSelect',
                                    width: 225
                                }
                            ]
                        }
                    />
                </div>
            )}
        </>
    );
};

export default ProductCard;
