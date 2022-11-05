import { Component, OnInit } from '@angular/core';
import {ItemModel} from "../../models/item.model";
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  // private itemService: any;
  item: ItemModel;
  // itemArray = this.itemService.getArray();



  constructor(private itemService: ItemService) { }
  itemArray = this.itemService.getArray();


  ngOnInit(): void {
    this.itemService.getOne(this.item);
    this.itemService.getAll();
  }

}
