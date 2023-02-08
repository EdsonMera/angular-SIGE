import { Component, Input, OnInit } from '@angular/core';
import { iif } from 'rxjs';
import { ICarouselItem } from './Icarousel-item.metadata';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  /**
   * Custom propeties
   */
  @Input() height= 500;
  @Input() isFulllScreen= false;
  @Input() items: ICarouselItem[]= [];

  /**
   * Final Propieties
   */
  public finalHeight: string | number = 0;
  public currentPosition= 0;

  constructor() {
    this.finalHeight= this.isFulllScreen ? '100vh': `$(this.height)px`;
   }

  ngOnInit(): void {
    this.items.map( (i, index) => {
      i.id= index;
      i.marginLeft= 0;
    });
  }

  setCurrentPosition(position: number){
    this.currentPosition= position;
    this.items.find(i => i.id === 0).marginLeft= -100 * position; //ese -100 se multilica x1 o x2 y seria los pixeles que se mueven en horizontal
  }

  setNext() {
    let finalPercentage= 0;
    let nextPositiom= this.currentPosition + 1;
    if(nextPositiom <= this.items.length -1){
      finalPercentage= -100*nextPositiom;
    }
    else {
      nextPositiom = 0;
    }
    this.items.find(i => i.id === 0 ).marginLeft = finalPercentage;
    this.currentPosition= nextPositiom;
  }

  setBack(){
    let finalPercentage = 0;
    let backPosition = this.currentPosition -1;
    if(backPosition >= 0){
      finalPercentage= -100 * backPosition;

    }
    else {
      backPosition= this.items.length -1;
      finalPercentage = -100 * backPosition;
    }
    this.items.find(i => i.id === 0).marginLeft = finalPercentage;
    this.currentPosition= backPosition;

  }

}
