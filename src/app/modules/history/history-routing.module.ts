import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryPageComponent } from './pages/history-page/history-page.component';

const routes: Routes = [{
  path:'',
  component:HistoryPageComponent,
  outlet:'tracks-display'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
