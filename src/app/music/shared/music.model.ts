import { IArtist } from "./artist.model";

export interface IMusic {
    id: string;
    nome: string;
    artistaId: string;
    playlistId: string;
    artista: IArtist;
    checked: boolean;
}