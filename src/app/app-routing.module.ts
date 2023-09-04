import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackStockComponent } from './track-stock/track-stock.component';
import { SentimentComponent } from './sentiment/sentiment.component';


const routes: Routes = [
  { path: '', redirectTo: 'TrackStock', pathMatch: 'full' },
  {
    path: 'TrackStock',
    component: TrackStockComponent
  },
  {
    path: 'sentiment/:symbol',
    component: SentimentComponent
  },
  { path: '**', pathMatch: 'full', component: TrackStockComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
