import { Component, OnInit, Input } from '@angular/core';
import { GuitarItem } from '../models/guitar-item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input("item") guitarItem: GuitarItem;

  constructor() { }

  ngOnInit() {
  }

}
