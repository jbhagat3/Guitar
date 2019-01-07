import { Component, OnInit, OnChanges } from '@angular/core';
import data from '../data/data';
import { GuitarItem } from '../models/guitar-item';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

class ItemFilter {
  category = {
  electric: false,
  acoustic:false,
  bass: false
  } as any;
  
  price =[
{
  low:0,
  high:999,
  selected: false
},
{
  low:1000,
  high:2999,
  selected: false
},
{
  low:3000,
  high:5000,
  selected: false
}
] as any;
condition = {
  new: false,
  used: false
}
  
}

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.css']
})


export class GuitarComponent implements OnInit {
guitaritems:GuitarItem[];
items : GuitarItem[];

filter = new ItemFilter();


  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.guitaritems = data.guitars;
    console.log(this.guitaritems);
    console.log(data);
   }

  ngOnInit() {
    
  }

  filterItems(obj) {
    this.filterCategory(obj)
    this.filterPrice(obj);
    this.filterCondition(obj);
  }


  filterCategory(obj: ItemFilter) {
    this.guitaritems = data.guitars.filter((item) => {
      return obj.category[item.category] || this.allFalse(obj.category)
    })
  }


  filterPrice(obj: ItemFilter) {
    this.guitaritems = this.guitaritems.filter((item) => {
      let value = false;
      obj.price.forEach(p => {
        if(p.selected  || allFalse(obj.price)) {
          if(item.price >= p.low && item.price <= p.high){
            value = true;
          }
        }
      });
      return value;
    })

    function allFalse(obj) {
      let value = true;
      obj.forEach(p => {
        if(p.selected) {
          value = false;
        }
      });
      return value;
    }
  }

  filterCondition(obj: ItemFilter) {
    this.guitaritems = this.guitaritems.filter((item) => {
      return (obj.condition.new && item.new) || (obj.condition.used && !item.new) || this.allFalse(obj.condition)
    })
  }



  allFalse(obj) {
    for (let key in obj) {
      if (obj[key]) {
        return false;
      }
    }
    return true;
  }




}
