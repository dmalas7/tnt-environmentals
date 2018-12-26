import { Component, OnInit } from '@angular/core';
import { PestControlService } from '../interfaces/pest-control-service.interface';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  helloDianaMessage = 'Hello Diana';
  homePestControlService: PestControlService={
    title:'Home Pest Control',
    types: [
      'Roaches',
      'Bed Bugs',
      'Ants',
      'Fleas',
      'Rodents',
      'Mosquitoes',
      'Ticks'
    ]
  } 

  termitesAndLawnMaintenanceService :PestControlService={
    title: 'Termites and Lawn Maintenance',
    types: [
      'Termite Inspection',
      'Colony Extermination',
      'Lawn Mowing',
      'Lawn Trimming'
    ]
  }  

  lawnAndTreesService: PestControlService ={
    title: 'Lawn and Trees',
    types: [
      'Weeds',
      'Ching Bugs',
      'Black Mold',
      'Mealy Bugs',
      'White Flies',
      'Fertilization'
    ]
  }

  ngOnInit() {
  }

}
