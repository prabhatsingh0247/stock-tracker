import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { trackStock } from '../models/stock.interface';

@Injectable({
  providedIn: 'root'
})


export class StockTrackerService {
  BASEURL: string = "https://finnhub.io/api/v1/";
  TOKEN: string = "bu4f8kn48v6uehqi3cqg";
  
  constructor(private http: HttpClient) { }

  getCurrentStock(params: any) {
    let queryParams = new HttpParams()
    .append('symbol', params.stockSymbol)
    .append('token', this.TOKEN)
    return this.http.get<trackStock>(this.BASEURL + 'quote/', { params: queryParams });
  }

  getCompanyName(params: any) {
    let queryParams = new HttpParams()
    .append('q', params.stockSymbol)
    .append('token', this.TOKEN)
    return this.http.get<trackStock>(this.BASEURL + 'search/', { params: queryParams });
  }

  getSentiment(params: string) {
    let queryParams = new HttpParams()
    .append('symbol', params)
    .append('token', this.TOKEN)
    return this.http.get<trackStock>(this.BASEURL + 'stock/insider-sentiment/', { params: queryParams });
  }
}
