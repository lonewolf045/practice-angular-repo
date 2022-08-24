import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass3',
  templateUrl: './ass3.component.html',
  styleUrls: ['./ass3.component.css']
})
export class Ass3Component implements OnInit {
  showDetails = true;
  clickCounter = 0;
  clicks = [];
  constructor() { }

  ngOnInit(): void {
  }
  onToggle() {
    this.showDetails = !this.showDetails;
    this.clickCounter++;
    let message = `Click ${this.clickCounter}: ${this.showDetails == true ? 'Showing' : 'Not Showing'}`;
    this.clicks.push({message: message, logNum: this.clickCounter});
    //console.log(this.clicks)
  }
}
