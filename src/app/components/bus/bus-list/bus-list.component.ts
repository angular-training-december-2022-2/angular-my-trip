import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from 'src/app/models/bus.model';
import { Cities } from 'src/app/models/cities.model';
import { BusService } from 'src/app/services/bus.service';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  allBus: Bus[] = [];
  allCities: Cities[] = [];

  constructor(private busService: BusService, private citiesService: CitiesService, private router:Router) { }

  ngOnInit(): void {
    this.citiesService.fetchAllCities().subscribe((resp)=>{
      this.allCities = resp;
    })
    this.busService.fetchAllBus().subscribe((response)=>{
      this.allBus = response;

    })
  }


  gotoBusRoute(busId: number){
    this.router.navigate(['bus-route-list', busId]);
  }
}
