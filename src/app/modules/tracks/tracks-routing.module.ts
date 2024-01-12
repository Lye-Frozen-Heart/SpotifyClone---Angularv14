import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracksPageComponent } from './pages/tracks-page/tracks-page.component';

const routes: Routes = [
  {
    path:'',
    component:TracksPageComponent,
    outlet:'tracks-page'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
