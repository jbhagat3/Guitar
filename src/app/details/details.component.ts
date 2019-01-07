import { Component, OnInit } from '@angular/core';
 
import { ActivatedRoute } from '@angular/router';
import { GuitarItem } from '../models/guitar-item';
import data from '../data/data';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  item: GuitarItem;
  id:number

  constructor(private _aRoute: ActivatedRoute) {

this.id= Number(this._aRoute.snapshot.params['id']);
this.item = data.guitars.find((item: GuitarItem) => {
return item.id === this.id;
})

   }

  ngOnInit() {
  }

}
