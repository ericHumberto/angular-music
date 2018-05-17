import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IPlaylist } from './playlist.model';

@Injectable()
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getPlaylistsByUser(user: string): Observable<IPlaylist> {
    let url = "https://intense-ocean-93206.herokuapp.com/api/playlists/";
    if(user) {
      url += "?user=";
      url += user;
    }

    console.log(url);
    
    return this.http.get<IPlaylist>(url);
  }

}
