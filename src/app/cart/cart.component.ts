import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

constructor () { }
  ngOnInit(): void {
  }
  currentNumber:number = 0;
  i=false;
  increments () {

    this.currentNumber++;
    if(this.currentNumber>=1){
      this.i=false
    }
    
  }
  
  decrements () {
    
    this.currentNumber--;
    if(this.currentNumber<=0){
      this.i=true;
    }
  }
  
}
