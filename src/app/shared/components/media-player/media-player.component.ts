import { Component, OnInit,OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover:TrackModel = {
    cover: 'https://media.istockphoto.com/id/1146670231/es/vector/ilustraci%C3%B3n-de-vector-de-pato-de-caucho.jpg?s=612x612&w=0&k=20&c=_ynfF5ICyMwRq-piQu3oj8i5yOBsf_zmrMXmQo6TfU8=',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    duration: 0,
    url: 'http://localhost/track.mp3',
    _id: 1
  }
  listObservers$:Array<Subscription> = [];
  constructor(private multimedia:MultimediaService) {
      
   }
   
  ngOnInit(): void {
    const observer:Subscription = this.multimedia.callback.subscribe(
        (response:TrackModel) => {
          console.log('Recibiendo canción',response);
        }
      )
      this.listObservers$ = [observer];
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach(u=>u.unsubscribe())
    console.log('🛑🛑🛑🛑🛑BOOM!');
    
  }
  

}
 