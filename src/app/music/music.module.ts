import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicListComponent } from './music-list/music-list.component';
import { MusicService } from './shared/music.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MusicRoutingModule,
    HttpClientModule
  ],
  declarations: [MusicListComponent],
  providers: [MusicService,
    HttpClient]
})
export class MusicModule { }
