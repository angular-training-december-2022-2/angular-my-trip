import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusListComponent } from './components/bus/bus-list/bus-list.component';
import { BusRouteListComponent } from './components/bus/bus-route-list/bus-route-list.component';
import { BusRouteSeatViewComponent } from './components/bus/bus-route-seat-view/bus-route-seat-view.component';
import { ReservationSuccessComponent } from './components/reservation-success/reservation-success.component';

const routes: Routes = [
  {path:'bus-list', component: BusListComponent},
  {path:'bus-route-list/:busId', component: BusRouteListComponent},
  {path:'bus-route-seat-view/:busRouteId', component: BusRouteSeatViewComponent},
  {path:'reservation-success/:resId', component: ReservationSuccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
