import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass4',
  templateUrl: './ass4.component.html',
  styleUrls: ['./ass4.component.css']
})
export class Ass4Component implements OnInit {

  numbers : Number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onIntervalChanged(counter : number) {
    this.numbers.push(counter);
  }
}
