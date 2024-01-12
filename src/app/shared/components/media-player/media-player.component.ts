import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
  mockCover:any = {
    cover:'https://media.istockphoto.com/id/1146670231/es/vector/ilustraci%C3%B3n-de-vector-de-pato-de-caucho.jpg?s=612x612&w=0&k=20&c=_ynfF5ICyMwRq-piQu3oj8i5yOBsf_zmrMXmQo6TfU8=',
    album:'Gioli & Assia',
    name:'BEBE (Oficial)'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
