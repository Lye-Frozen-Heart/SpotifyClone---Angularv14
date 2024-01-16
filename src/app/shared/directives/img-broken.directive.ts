import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]' 
})
export class ImgBrokenDirective {
  @Input() customImg: string = '';
  //Host
  @HostListener('error') handleError():void{ 
  const hostNative = this.host.nativeElement; 
  console.log('❌ Image Error -->', this.host);
  hostNative.src = this.customImg;
  
  }
  constructor(private host: ElementRef) {
    

   }

}
