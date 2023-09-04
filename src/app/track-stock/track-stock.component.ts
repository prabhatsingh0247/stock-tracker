import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StockTrackerService } from '../core/services/stock-tracker.service';
import { Subscription, forkJoin } from 'rxjs';
import { LocalStorageService } from '../core/services/local-storage.service';

@Component({
  selector: 'app-track-stock',
  templateUrl: './track-stock.component.html',
  styleUrls: ['./track-stock.component.css']
})
export class TrackStockComponent implements OnInit, OnDestroy {

  stockTrackForm = this.formBuilder.group({
    stockSymbol: ['', [Validators.required]]
  });

  stockData = this.localStorageService.getItem() || [];
  private subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private stockTrackerSrv: StockTrackerService,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.localStorageService.setItem(this.stockData);
  }


  onStockTrackFormSubmit() {
    let formData = this.stockTrackForm.value;
    let finalAPICall = forkJoin([this.stockTrackerSrv.getCurrentStock(formData), this.stockTrackerSrv.getCompanyName(formData)]);
    finalAPICall.subscribe({
      next: (data) => {
        this.getStockDetails(formData, data)
      },
      error: (err) => {
        console.log('err', err);
      },
      complete: () => {
        this.stockTrackForm.reset();
      }
    })

  }

  getStockDetails(formData, data: any) {
    let stockSymbol = data[1]['result'].find(o => o.symbol === formData.stockSymbol);
    let finalData = { ...data[0], ...stockSymbol }
    let retrievedData = this.localStorageService.getItem();
    retrievedData.unshift(finalData);
    this.localStorageService.setItem(retrievedData);
    this.stockData = this.localStorageService.getItem()
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => {
      subscription.unsubscribe();
    });
  }


}
