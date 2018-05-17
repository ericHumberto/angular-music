import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IMusic } from './music.model';
import { HttpClient } from '@angular/common/http'; 

@Injectable()
export class MusicService {

  constructor(private http: HttpClient) { }

  getMusics(filtro: string): Observable<IMusic[]> {
    return this.http.get<IMusic[]>("https://intense-ocean-93206.herokuapp.com/api/musicas/?filtro=1");
  }
}
