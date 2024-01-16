import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import * as tracks_json from '@data/tracks.json'; //Importación de los datos json a pelo
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  tracksTrending:Array<TrackModel> = [];
  tracksRandom:Array<TrackModel> = [];
  listObservers$:Array<Subscription> = [];
  constructor(private trackService:TrackService) { }

  ngOnInit(): void {
    const observer1$ = this.trackService.dataTracksTrending$
    .subscribe(response => {
      this.tracksTrending = response;
      
      console.log('Canciones trend: ---->', response)
    })
    const observer2$ = this.trackService.dataTracksRandom$
    .subscribe(response => {
      this.tracksRandom = [...this.tracksRandom,...response]
      console.log('Canciones random: 🧡🧡---->', response)
    })
    this.listObservers$ = [observer1$,observer2$];
  }
  ngOnDestroy():void{
    this.listObservers$.forEach(u => u.unsubscribe);
  }

}
