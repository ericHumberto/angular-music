import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IPlaylist } from './playlist.model';
import { IMusic } from './music.model';

@Injectable()
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getPlaylistsByUser(user: string): Observable<IPlaylist> {
    let url = "https://intense-ocean-93206.herokuapp.com/api/playlists/";
    if (user) {
      url += "?user=";
      url += user;
    }

    return this.http.get<IPlaylist>(url);
  }

  addMusicsToPlaylist(playlistsId: string, musics: IMusic[]) {
    let url = "https://intense-ocean-93206.herokuapp.com/api/playlists/";
    url += playlistsId;
    url += "/musicas"

    return this.http.post<IPlaylist>(url, musics);
  }

  removeMusicToPlaylist(playlistsId: string, musicId: string) {
    let url = "https://intense-ocean-93206.herokuapp.com/api/playlists/";
    url += playlistsId;
    url += "/musicas/";
    url += musicId;
    
    return this.http.delete<IPlaylist>(url);
  }
}
