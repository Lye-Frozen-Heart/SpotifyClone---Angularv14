import { Component, OnInit,OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar:ElementRef = new ElementRef('');
  listObservers$:Array<Subscription> = [];
  state:string = 'paused';
  constructor(public multimedia:MultimediaService) {
      
   }
   
  ngOnInit(): void {
      const observerPlayerStatus$ = this.multimedia.playerStatus$.subscribe(status => this.state = status);

      this.listObservers$ = [observerPlayerStatus$];
  }
  ngOnDestroy(): void {
    this.listObservers$.forEach(u=>u.unsubscribe())
    console.log('🛑🛑🛑🛑🛑BOOM!');
    
  }
  handlePosition(event:MouseEvent):void{
    const elNative :HTMLElement = this.progressBar.nativeElement;
    const {clientX } = event; //Donde hace click el usuario en el eje X
    const {x,width} = elNative.getBoundingClientRect(); //x aquí es la suma del primer elemento con el segundo que es progress bar, width la medida máxima del elemento de progreso
    const clickX = clientX - x;  //Relación de clientX del usuario menos el valor incial del elemento
    const percentageFromX = (clickX  * 100) /width; //Porcentaje en relación del click de la barra!
    this.multimedia.seekAudio(percentageFromX);
  }
  

}
 