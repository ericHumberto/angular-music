import { Component, OnInit } from '@angular/core';
import { IMusic } from '../shared/music.model';
import { element } from 'protractor';
import { MusicService } from '../shared/music.service';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css']
})
export class MusicListComponent implements OnInit {

  artist: string = '';
  user: string = '';
  musicList: IMusic[];
  musicPlayList: IMusic[];
  musicSelectedToRemove: string = '';

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.musicService.getMusics(this.artist).subscribe(
      (data) => {
        this.musicList = data;
      }
    );

    // this.musicList = [
    //   {
    //     id: 1,
    //     artistName: "Artista 1",
    //     name: "Musica 1",
    //     checked: false
    //   },
    //   {
    //     id: 2,
    //     artistName: "Artista 2",
    //     name: "Musica 2",
    //     checked: false
    //   },
    //   {
    //     id: 3,
    //     artistName: "Artista 3",
    //     name: "Musica 3",
    //     checked: false
    //   },
    //   {
    //     id: 4,
    //     artistName: "Artista 4",
    //     name: "Musica 4",
    //     checked: false
    //   },
    // ];

    this.musicPlayList = [];
  }

  selectToAdd(music: IMusic) {
    let index = this.musicList.indexOf(this.musicList.find(item => item.id == music.id));
    this.musicList[index].checked = !this.musicList[index].checked;
  }

  selectToRemove(music: IMusic) {
    this.musicSelectedToRemove = music.id;
  }

  add() {
    this.musicList.forEach(music => {
      if (music.checked) {
        this.musicPlayList.push(music);
        let indexToRemove = this.musicList.indexOf(this.musicList.find(item => item.id == music.id));
        this.musicList.splice(indexToRemove, 1);
      }
    });
  }

  remove() {
    let indexToRemove = this.musicPlayList.indexOf(this.musicPlayList.find(item => item.id == this.musicSelectedToRemove));
    this.musicList.push(this.musicPlayList[indexToRemove]);
    this.musicPlayList.splice(indexToRemove, 1);
    this.musicSelectedToRemove = '';
  }
}
