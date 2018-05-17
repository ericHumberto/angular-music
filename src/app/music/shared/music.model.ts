import { IArtist } from "./artist.model";

export interface IMusic {
    id: string;
    nome: string;
    artistaId: string;
    // artista: IArtist;
    checked: boolean;
}