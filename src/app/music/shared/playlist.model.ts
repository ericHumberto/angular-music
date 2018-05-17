import { IUser } from "./user.model";
import { IPlaylistMusic } from "./playlistMusic.model";

export interface IPlaylist {
    id: string;
    playlistMusicas: IPlaylistMusic[];
    usuario: IUser;
}