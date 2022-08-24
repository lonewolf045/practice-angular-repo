import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval;
  @Output() game = new EventEmitter<number>();
  counter : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(() => {
      this.game.emit(this.counter + 1);
      this.counter++;
      //console.log(this.counter);
    }, 1000)
  }

  onStopGame() {
    clearInterval(this.interval)
  }

}
