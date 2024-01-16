import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input() mode:'small' | 'big' = 'small';
  @Input() track: TrackModel = {
    name: '',
    album: '',
    cover: '',
    duration: 0,
    url: '',
    _id: ''
  };
  constructor(private multimedia:MultimediaService) { 

  }

  ngOnInit(): void {

  }
  sendPlay(track:TrackModel):void{
    this.multimedia.callback.emit(track)
  }

}
