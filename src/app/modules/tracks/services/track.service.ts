import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, observable, of } from 'rxjs';
import * as tracks_json from '@data/tracks.json';
@Injectable({
  providedIn: 'root'
})
export class TrackService {
  dataTracksTrending$:Observable<TrackModel[]> = of([]);
  dataTracksRandom$:Observable<TrackModel[]> = of([]);
  constructor() { 
    const {data}:any = (tracks_json as any).default;
    this.dataTracksTrending$ = of(data);
    this.dataTracksRandom$ = new Observable(observer => {
      const trackEx:TrackModel = {
        _id:9,
        name:'Leve',
        album:'Cartel de Santa',
        url:'http://',
        duration:99,
        cover: ''
      }
      setTimeout(()=>{
        observer.next([trackEx]);
      },3500);
      
    });
  }
}
