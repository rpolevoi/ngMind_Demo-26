import { RouterModule }  from '@angular/router';
import { RouteAComponent } from './route_a.component';

export const routing = RouterModule.forChild([
  { path: '', redirectTo: 'routeA', pathMatch: 'full'},
  { path: 'routeA', component: RouteAComponent}
]);
