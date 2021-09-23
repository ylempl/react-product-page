import React, { useState, FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDrupalProductThunk, getProductThunk } from '../redux/thunks/product';
import Products from '../modules/Products/Products';
import { IQuery } from '../modules/Products/components/Toolbar';

interface IProductContainer {
    actions: any,
    productDataRaw: any,
    drupalProductDataRaw: any
}

const ProductsContainer: FC<IProductContainer> = ({
    actions,
    productDataRaw,
    drupalProductDataRaw
}) => {
    const [query, setQuery] = useState<IQuery>({
        id: 96149,
        apiVersion: 'pimapi'
    });

    const handleOnSearch = () => {
        actions.fetchProduct(query);
        actions.fetchDrupalProduct(query.id);
    };

    const handleChange = (event: any) => {
        const nam = event.target.name;
        const val = event.target.value;

        setQuery({
            ...query,
            [nam]: val
        })
    }

    return (
        <Products
            productData={productDataRaw}
            drupalProductData={drupalProductDataRaw}
            handleOnSearch={handleOnSearch}
            handleChange={handleChange}
            query={query}
        />
    );
};

const mapStateToProps = (state: any) => ({
    productDataRaw: state.product,
    drupalProductDataRaw: state.drupalProduct
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: {
        fetchProduct: bindActionCreators(getProductThunk, dispatch),
        fetchDrupalProduct: bindActionCreators(getDrupalProductThunk, dispatch),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
