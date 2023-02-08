import { Component, Input, OnInit } from '@angular/core';
import { min } from 'rxjs/operators';

@Component({
  selector: 'app-card-loader',
  templateUrl: './card-loader.component.html',
  styleUrls: ['./card-loader.component.css']
})
export class CardLoaderComponent implements OnInit {

  //input styles
  @Input() imageSize= 75;
  @Input() barHeight= 15;
  @Input() bars= 1;

  //final properties

  public totalBars: {width: string}[] = [];
  public finalStyleImage= {};
  public finalHeightBar= '0';

  constructor() { }

  ngOnInit(): void {

    //calculate total Bars
    for(let i=0; i < this.bars; i++){
      const width= Math.floor(Math.random()* (100 - 60))+ 60;
     this.totalBars.push({width: `${width}%`});
    }
    // image style

    this.finalStyleImage= {
      width: `$(this.imageSize)px`,
      heigth: `$(this.imageSize)px`
    };

    //bar style
    this.finalHeightBar= `$(this.barHeight)px`;
    
  }

}
