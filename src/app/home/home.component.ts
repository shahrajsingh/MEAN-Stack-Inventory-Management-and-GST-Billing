import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  makingBill: boolean = true;
  constructor() {}

  ngOnInit(): void {}
  makebill() {
    this.makingBill = true;
  }
  cancelmakebill() {
    this.makingBill = false;
  }
}
