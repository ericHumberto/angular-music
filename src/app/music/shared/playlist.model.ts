import { IMusic } from "./music.model";
import { IUser } from "./user.model";

export interface IPlaylist {
    id: string;
    playlistMusicas: IMusic[];
    usuario: IUser;
}