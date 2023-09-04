import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockTrackerService } from '../core/services/stock-tracker.service';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {

  symbolId: string;
  symbolName: string;
  sentimentLast3Months: [] = [];
  constructor(private router: Router, private route: ActivatedRoute,private stockTrackerSrv: StockTrackerService) { }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      // console.log("symbol", routeParams['symbol'])
      this.symbolId = routeParams['symbol']
    });

    this.getSentimentDetails(this.symbolId)
  }


  getSentimentDetails(symbol) {
    this.stockTrackerSrv.getSentiment(symbol).subscribe({
      next: (result) => {
        console.log("result", result)
        this.symbolName = result['symbol']
        this.sentimentLast3Months = result['data'].slice(-3);
      },
      error: (e) => console.error(e),
      complete: () => console.info("Success...") 
    });
  }

  sentimentTrackBy(index) {
    return index;
   }
}
