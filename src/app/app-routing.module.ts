import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'services', component:ServicesComponent},
  {path:'contact', component:ContactInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
