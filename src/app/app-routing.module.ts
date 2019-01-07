import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuitarComponent } from './guitar/guitar.component';
import {HomeComponent} from './home/home.component';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';


  const routes: Routes =[
    {path:'', redirectTo:"home", pathMatch:"full"},
    {path:'guitar', component:GuitarComponent},
    {path:'home', component:HomeComponent},
    {path:'details/:id', component:DetailsComponent}
   
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
