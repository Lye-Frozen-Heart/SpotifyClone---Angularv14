import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as tracks_json from '@data/tracks.json'; //Importación de los datos json a pelo
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  mockTracksList:Array<TrackModel> = []
  constructor() { }

  ngOnInit(): void {
    const { data } : any = (tracks_json as any).default //Hay otra forma de hacer esto???
    this.mockTracksList = data;
  }

}
