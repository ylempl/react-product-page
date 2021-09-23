import React, { useState, FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { getProductThunk } from '../redux/thunks/product';
import Login from '../modules/Login/Login';

interface IProductContainer {
    actions: any,
    productDataRaw: any;
}

const LoginContainer: FC<IProductContainer> = ({
    actions,
    // productDataRaw,
}) => {
    // const [productId, setProductId] = useState(96149);
    // const handleOnChange = (target: any) => {
    //     setProductId(target.value);
    // };

    const handleOnSearch = () => {
        actions.fetchProduct();
    };

    return (
        <Login />
    );
};

const mapStateToProps = (state: any) => ({
    productDataRaw: state.product,
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: {
        fetchProduct: bindActionCreators(getProductThunk, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
