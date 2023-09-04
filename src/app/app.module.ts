import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackStockComponent } from './track-stock/track-stock.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StockTrackerService } from './core/services/stock-tracker.service';
import { ManageStockComponent } from './manage-stock/manage-stock.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { MonthNamePipe } from './core/pipe/month-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TrackStockComponent,
    ManageStockComponent,
    SentimentComponent,
    MonthNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [StockTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
