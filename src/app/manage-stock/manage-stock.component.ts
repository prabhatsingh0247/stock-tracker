import { Component, Input, OnInit } from '@angular/core';
import { trackStock } from '../core/models/stock.interface';
import { LocalStorageService } from '../core/services/local-storage.service';

@Component({
  selector: 'app-manage-stock',
  templateUrl: './manage-stock.component.html',
  styleUrls: ['./manage-stock.component.css']
})
export class ManageStockComponent implements OnInit {
 
  @Input() stockData: Array<trackStock> = [];
  constructor( private localStorageService: LocalStorageService) { }

  ngOnInit(): void {}


  removeStock(symbols: string) {
    let retrievedData = this.localStorageService.getItem();
    let index = retrievedData.findIndex(o => o.symbol === symbols);
    retrievedData.splice(index, 1)
    this.localStorageService.setItem(retrievedData);
    this.stockData = this.localStorageService.getItem();
  }

}
