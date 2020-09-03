import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard/Dashboard';

const DashboardContainer = () => {
    useEffect(() => {
        // actions.fetchRequest();
    }, []);

    return (
        <Dashboard />
    );
};

const mapStateToProps = (state : any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
