import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusRoutes } from 'src/app/models/bus-routes.model';
import { Bus } from 'src/app/models/bus.model';
import { Cities } from 'src/app/models/cities.model';
import { BusRoutesService } from 'src/app/services/bus-routes.service';
import { BusService } from 'src/app/services/bus.service';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-bus-route-list',
  templateUrl: './bus-route-list.component.html',
  styleUrls: ['./bus-route-list.component.css']
})
export class BusRouteListComponent implements OnInit {

  allRoute: BusRoutes[] = [];
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
              private busService: BusService,
              private citiesService: CitiesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    this.citiesService.fetchAllCities().subscribe((resp)=>{
      this.allCities = resp;
    })

    let busId = this.activatedRoute.snapshot.paramMap.get("busId");
    if(busId!=null){
      this.busRouteService.fetchBusRoutesByBusId(+busId).subscribe((response)=>{
        this.allRoute = response;
        if(busId!=null){
          this.busService.fetchABus(+busId).subscribe((response)=>{
            this.fetchedBus = response;
          })
        }
      })
    }

  }


  gotoSeatLayout(busRouteId: number){
    this.router.navigate(['bus-route-seat-view', busRouteId]);
  }
}
