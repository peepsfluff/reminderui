import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetreminderComponent } from './getreminder/getreminder.component';

import { SendreminderComponent } from './sendreminder/sendreminder.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
{ 
  path: '',
  redirectTo: 'home-page',
  pathMatch: 'full'
},
{
  path: 'home-page',
  component: HomepageComponent
},
{
  path: 'get-reminder',
  component: GetreminderComponent
},
{
  path:'send-reminder',
  component: SendreminderComponent
}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
