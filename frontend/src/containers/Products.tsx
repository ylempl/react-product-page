import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProductThunk } from '../redux/thunks/product';
import Products from '../modules/Products/Products';

interface IProductContainer {
    productDataRaw: any
}

const ProductsContainer: FC<IProductContainer> = ({ productDataRaw }) => <Products productData={productDataRaw} />

const mapStateToProps = (state: any) => ({
    productDataRaw: state.product
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: {
        fetchProduct: bindActionCreators(getProductThunk, dispatch),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
