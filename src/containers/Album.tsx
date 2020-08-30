import React, { useEffect, useState, FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestThunk } from '../redux/thunks/album';
import Album from '../components/Album/Album';

interface IAlbumContainer {
    actions: any,
    albumDataRaw: any;
}

const AlbumContainer: FC<IAlbumContainer> = ({
    actions,
    albumDataRaw
}) => {
    const [albumData, setAlbumData] = useState([]);
    useEffect(() => {
        actions.fetchRequest();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (albumDataRaw && albumDataRaw.length !== 0) {
            setAlbumData(albumDataRaw.slice(0, 10));
        }
    }, [albumDataRaw]);

    return (
        <Album
            actions={actions}
            albumData={albumData}
        />
    );
};

const mapStateToProps = (state : any) => ({
    albumDataRaw: state.album.data,
});

const mapDispatchToProps = (dispatch: any) => ({
    actions: {
        fetchRequest: bindActionCreators(requestThunk, dispatch),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumContainer);
