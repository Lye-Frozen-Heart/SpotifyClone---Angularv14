import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription, lastValueFrom } from 'rxjs';
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
   this.loadDataAll();
  }
  
  ngOnDestroy():void{
  }

  async loadDataAll():Promise<any>{
    this.tracksTrending = await lastValueFrom(this.trackService.getAllTracks$());
    this.tracksRandom = await lastValueFrom(this.trackService.getAllRandom$());
  }
}
