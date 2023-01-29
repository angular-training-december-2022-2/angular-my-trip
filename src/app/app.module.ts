import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusListComponent } from './components/bus/bus-list/bus-list.component';
import { BusRouteListComponent } from './components/bus/bus-route-list/bus-route-list.component';
import { BusRouteSeatViewComponent } from './components/bus/bus-route-seat-view/bus-route-seat-view.component';
import { ReservationSuccessComponent } from './components/reservation-success/reservation-success.component';

@NgModule({
  declarations: [
    AppComponent,
    BusListComponent,
    BusRouteListComponent,
    BusRouteSeatViewComponent,
    ReservationSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
