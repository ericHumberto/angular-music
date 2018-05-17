import { Component, OnInit } from '@angular/core';
import { IMusic } from '../shared/music.model';
import { element } from 'protractor';
import { MusicService } from '../shared/music.service';
import { PlaylistService } from '../shared/playlist.service';
import { IPlaylist } from '../shared/playlist.model';
import { IPlaylistMusic } from '../shared/playlistMusic.model';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {
  musicList: IMusic[];
  playList: IPlaylist;
  musicArtistSearch: string = '';
  userPlaylistSearch: string = '';

  musicIdSelectedToRemove: string = '';

  constructor(private musicService: MusicService,
    private playlistService: PlaylistService) { }

  ngOnInit() {
    this.musicList = [];
  }

  onSearchMusicArtistChange(value: string) {
    this.musicArtistSearch = value;
    this.musicService.getMusics(value).subscribe(
      (data) => {
        this.musicList = data;
      }
    );
  }

  onSearchUserPlaylistChange(value: string) {
    this.userPlaylistSearch = value;
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

  selectToRemove(playlistMusic: IPlaylistMusic) {
    this.musicIdSelectedToRemove = playlistMusic.musicaId;
  }

  addToPlaylist() {
    let musicsToAdd = this.musicList.filter(music => music.checked);

    this.playlistService.addMusicsToPlaylist(this.playList.id, musicsToAdd).subscribe(
      (data) => {
        this.onSearchUserPlaylistChange(this.userPlaylistSearch);
      }
    );
  }

  removeFromPlaylist() {
    this.playlistService.removeMusicToPlaylist(this.playList.id, this.musicIdSelectedToRemove).subscribe(
      (data) => {
        this.onSearchUserPlaylistChange(this.userPlaylistSearch);
        this.userPlaylistSearch = '';
      }
    );
  }
}
