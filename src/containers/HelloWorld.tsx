import React, { useEffect, FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestThunk } from '../redux/thunks/helloWorld';
import HelloWorld from '../components/HelloWorld/HelloWorld';

interface IHelloWorldContainer {
    actions: any,
    helloData: any;
}

const HelloWorldContainer: FC<IHelloWorldContainer> = ({
    actions,
    helloData
}) => {
    useEffect(() => {
        actions.fetchRequest();
        // eslint-disable-next-line
    }, []);

    return (
        <HelloWorld
            actions={actions}
            helloData={helloData}
        />
    );
};

const mapStateToProps = (state : any) => ({
    helloData: state.helloWorld.data,
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: {
        fetchRequest: bindActionCreators(requestThunk, dispatch),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorldContainer);
