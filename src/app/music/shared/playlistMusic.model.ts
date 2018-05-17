import { IMusic } from "./music.model";

export interface IPlaylistMusic {
    musica: IMusic;
    musicaId: string;
    playlistId: string;
}