import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  callback:EventEmitter<any> = new EventEmitter<any>();

  public audio !:HTMLAudioElement;

  public tracksInfo$ :BehaviorSubject<any> = new BehaviorSubject(undefined);

  public timeElapsed$ :BehaviorSubject<string> = new BehaviorSubject('00:00');

  public timeRemaining$ :BehaviorSubject<string> = new BehaviorSubject('-00:00');
   
  public playerStatus$ :BehaviorSubject<string> = new BehaviorSubject('paused');

  public playerPercentage$ :BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { 
   this.audio = new Audio();
   this.tracksInfo$.subscribe(response =>{
    if(response){
      this.setAudio(response);
      this.listenAllEvents();
    }
   })

   
  }
  private listenAllEvents():void{
    this.audio.addEventListener('timeupdate',this.calculateSongTime,false);
    this.audio.addEventListener('playing',this.setPlayerStatus,false);
    this.audio.addEventListener('play',this.setPlayerStatus,false);
    this.audio.addEventListener('pause',this.setPlayerStatus,false);
    this.audio.addEventListener('ended',this.setPlayerStatus,false);
  }

  private calculateSongTime = ()=>{
    const {duration,currentTime} = this.audio;
    this.setTimeElapsed(currentTime);
    this.setTimeRemaining(currentTime,duration);
    this.setPercentage(currentTime,duration);
  }

  private setTimeElapsed(currentTime:number):void{
    let seconds = Math.floor(currentTime % 60);
    
    let minutes = Math.floor((currentTime / 60) % 60 );
    
    const displaySeconds = (seconds < 10) ? `0${seconds}`:seconds;
    
    const displayMinutes = (minutes < 10) ? `0${minutes}`:minutes;
    
    const displayFormat = `${displayMinutes}:${displaySeconds}`;
    
    this.timeElapsed$.next(displayFormat);
  }

  private setTimeRemaining(currentTime:number, duration:number):void{
    let timeLeft = duration - currentTime;
    
    let seconds = Math.floor(timeLeft % 60);
    
    let minutes = Math.floor((timeLeft / 60) % 60 );
    
    const displaySeconds = (seconds < 10) ? `0${seconds}`:seconds;
    
    const displayMinutes = (minutes < 10) ? `0${minutes}`:minutes;
    
    const displayFormat = `-${displayMinutes}:${displaySeconds}`;
    
    this.timeRemaining$.next(displayFormat);
  }
  public setAudio(track:TrackModel):void{
    console.log('🎶',track);
    this.audio.src = track.url;
    this.audio.play();

  }

  private setPlayerStatus = (state:any) =>{
    switch(state.type){
      case 'play':
      this.playerStatus$.next('play');
      break;
      case 'playing':
      this.playerStatus$.next('playing');
      break;
      case 'ended':
      this.playerStatus$.next('ended');
      break;
      default:
      this.playerStatus$.next('pause');
      break;
    }
  }
  public togglePlayer():void{
    (this.audio.paused) ? this.audio.play() : this.audio.pause();
  }
  public setPercentage(currentTime:number, duration:number):void{
    let percentage = (currentTime * 100) / duration;
    this.playerPercentage$.next(percentage);
  }
  public seekAudio(percentage:number):void{
    const {duration} = this.audio;
    const percentageToSeconds = (percentage * duration) / 100;
    this.audio.currentTime = percentageToSeconds;
  }
}
