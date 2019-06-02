import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CarDetailListComponent} from './car-detail-list/car-detail-list.component';
import {HttpClientModule} from "@angular/common/http";
import {CarParkingServiceService} from "./car-parking-service.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CarDetailListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CarParkingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
