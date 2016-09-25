import { RouterModule }  from '@angular/router';
import { RouteBComponent } from './route_b.component';

export const routing = RouterModule.forChild([
  { path: '', redirectTo: 'routeB', pathMatch: 'full'},
  { path: 'routeB', component: RouteBComponent}
]);
