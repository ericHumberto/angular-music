import { Component, OnInit } from '@angular/core';
import { IMusic } from '../shared/music.model';
import { element } from 'protractor';
import { MusicService } from '../shared/music.service';
import { PlaylistService } from '../shared/playlist.service';
import { IPlaylist } from '../shared/playlist.model';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {
  musicList: IMusic[];
  playList: IPlaylist;

  musicSelectedToRemove: string = '';

  constructor(private musicService: MusicService,
    private playlistService: PlaylistService) { }

  ngOnInit() {
    this.musicList = [];
  }

  onSearchMusicArtistChange(value: any) {
    this.musicService.getMusics(value).subscribe(
      (data) => {
        this.musicList = data;
      }
    );
  }
  
  onSearchUserPlaylistChange(value: any) {
    this.playlistService.getPlaylistsByUser(value).subscribe(
      (data) => {
        this.playList = data;
      }
    );
  }

  selectToAdd(music: IMusic) {
    let index = this.musicList.indexOf(this.musicList.find(item => item.id == music.id));
    this.musicList[index].checked = !this.musicList[index].checked;
  }

  selectToRemove(music: IMusic) {
    this.musicSelectedToRemove = music.id;
  }

  add() {
  }

  remove() {
  }
}
