import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarDetailListComponent} from "./car-detail-list/car-detail-list.component";

const routes: Routes = [
  { path: 'carParkingDetails', component: CarDetailListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
