import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  certifiedServices:string[]=[
    'Lawn and Ornamentals', 
    'GHP General House Pest Control and Rodent Control',
    'Termites', 
    'Mosquito Control'
  ]

  aboutFirstMessage:string=`TNT Environmetal Services was founded by Enrique Alas 
  with his son in 2009. Mr. Alas holds a college degree in Agricultural Engineering 
  additionally a Pest Control Technology Certificate from the University of Florida 
  obtained in 2012. Mr. Alas has received extensive Agriculture and Horticulture training 
  in Israel, Venezuela, and Nicaragua.`
  
  aboutSecondMessage:string=`Mr.Alas, with his 16 years of experience in pest control and 20 years of experience
  in Horticulture-Agriculture, enriches TNT ENVIRONMENTAL SERVICES to offer a great 
  service and advice to his customers about the best decision to take in 
  pest control for their residential home, Landscape Company, Condominiun or 
  Community Association, Hotels, and Restaurants.`
  
  ngOnInit() {
  }

}
