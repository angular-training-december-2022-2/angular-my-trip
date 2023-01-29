import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusRoutes } from 'src/app/models/bus-routes.model';
import { Bus } from 'src/app/models/bus.model';
import { Cities } from 'src/app/models/cities.model';
import { Reservations } from 'src/app/models/reservations.model';
import { BusRoutesService } from 'src/app/services/bus-routes.service';
import { BusService } from 'src/app/services/bus.service';
import { CitiesService } from 'src/app/services/cities.service';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-bus-route-seat-view',
  templateUrl: './bus-route-seat-view.component.html',
  styleUrls: ['./bus-route-seat-view.component.css']
})
export class BusRouteSeatViewComponent implements OnInit {

  selectedSeats: number[] = [];
  totalSeats: number[] = [];
  color:string = '';
  busRoute: BusRoutes = {
    id: 0,
    busId: 0,
    busTravelDateTime: new Date(),
    busSeatsTaken: []
  };

  allCities: Cities[] = [];

  fetchedBus: Bus = {
    id: 0,
    busName: '',
    busTicketFare: 0,
    busFromId: 0,
    busToId: 0,
    busTotalSeats: 0,
    busImageUrl: [] 
  };

  constructor(private busRouteService: BusRoutesService, 
              private reservationService: ReservationsService,
              private busService: BusService,
              private citiesService: CitiesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.citiesService.fetchAllCities().subscribe((resp)=>{
      this.allCities = resp;
    })

    let busRouteId = this.activatedRoute.snapshot.paramMap.get("busRouteId");
    if(busRouteId!=null){
      this.busRouteService.fetchABusRoute(+busRouteId).subscribe((response)=>{
        this.busRoute = response;
        if(busRouteId!=null){
          this.busService.fetchABus(+this.busRoute.busId).subscribe((response)=>{
            this.fetchedBus = response;

            for(let i=1;i<=response.busTotalSeats;i++){
              this.totalSeats.push(i);
            }
          })
        }
      })
    }
  }
displaySeat(seat: number){
  if(this.busRoute.busSeatsTaken.findIndex((eachSeat)=>eachSeat==seat)!=-1){
    this.color="RED";
  }else if(this.selectedSeats.findIndex((eachSeat)=>eachSeat==seat)!=-1){
    this.color="BLUE"
  }else{
    this.color="GREEN";
  }
  return this.color;
}

addToSelectedSeats(seat: number){
  if( this.selectedSeats.findIndex((eachSeat)=>eachSeat==seat)!=-1){
    this.selectedSeats.splice(this.selectedSeats.findIndex((eachSeat)=>eachSeat==seat),1);
  }else{
    this.selectedSeats.push(seat);
  }

}

reserveTickets(){
  let ticketDetails: Reservations ={
    id: 0,
    resBusRouteId: this.busRoute.id,
    resSeatsTaken: this.selectedSeats
  }
  this.reservationService.addReservation(ticketDetails).subscribe((response)=>{
    this.router.navigate(['reservation-success', response.id]);
  })

}
}
