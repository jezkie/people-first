import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from '../../app.component';

const appRoutes = [
  {path: '', component: AppComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RoutingModule { }