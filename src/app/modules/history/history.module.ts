import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HistoryPageComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HistoryModule { }
