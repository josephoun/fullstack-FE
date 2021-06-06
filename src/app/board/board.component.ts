import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  @Input() userCount = 0;
  @Output() getUsersEvent = new EventEmitter();

  ngOnInit(): void {
  }

  getAllUsers() {
    this.getUsersEvent.emit('get all users');
  }

}
