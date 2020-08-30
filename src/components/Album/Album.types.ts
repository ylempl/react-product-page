export interface IAlbum {
    actions?: any,
    albumData: AlbumItem[];
}

export interface IAlbumItem {
    album: AlbumItem;
}

export type AlbumItem = {
    albumId: number,
    id: number,
    thumbnailUrl: string,
    title: string,
    url: string
}