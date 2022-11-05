import {Injectable} from '@angular/core';
import {ItemModel} from "../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  item1: ItemModel = {id: "0", price: 333333, name: "mol"};
  item2: ItemModel = {id: "2", price: 120, name: "madsasfsa"};
  item3: ItemModel = {id: "3", price: 324450, name: "safsfasfaf"};
  private array=[this.item1,this.item3,this.item3];

  constructor() {
  }

  getAll(): void {
    console.log(this.item1);
    console.log(this.item2);

  }

  getOne(rst: ItemModel) {
    rst = this.item3
  }
  getArray(){
    return this.array;
  }

}
