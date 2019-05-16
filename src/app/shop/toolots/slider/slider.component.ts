import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'toolots-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class ToolotsSliderComponent implements OnInit {
 //@ViewChild('video1') video1: HTMLVideoElement;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    

      var promise = document.querySelector('video').play();
      
      if (promise !== undefined) {
          promise.then(val => {
              console.log ("Auto-play started from slider component", val);
              // Auto-play was failed
          }).catch((error) => {
              console.log ("Auto-play failed slider component", error)
              // Auto-play started
              document.querySelector('video').play();
          });
      }
    
    
  }


   // Slick slider config
  public sliderConfig: any = {
    autoplay: true,
    autoplaySpeed: 3000
  };

}
