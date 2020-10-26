import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-make-bill',
  templateUrl: './make-bill.component.html',
  styleUrls: ['./make-bill.component.scss'],
})
export class MakeBillComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  addItem(form: NgForm) {}
}
