import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from '../../app.component';
import { HomeComponent } from '../../component/home/home.component';

const appRoutes = [
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }