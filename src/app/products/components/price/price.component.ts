import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styles: ``
})
export class PriceComponent implements  OnInit,OnChanges,OnDestroy{
  @Input()
  public price : number = 0;

  public interval$?: Subscription; //el simbolo de peso es para determinar q es un observable
                                  //no lo inicializare en el constructor por eso ?
  ngOnInit(): void {
    console.log('Price Component (hijo): ngOnInit');
    this.interval$ = interval(1000).subscribe( value => console.log(`Ticks : ${value}`))
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Price Component (hijo): ngOnChanges');
    console.log({changes});
  }

  ngOnDestroy(): void {
    console.log('Price Component (hijo): ngOnDestroy');
    this.interval$?.unsubscribe();
  }
}
