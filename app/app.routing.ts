import { Routes,
         RouterModule } from '@angular/router';

export const routes: Routes = [
 { path: '', redirectTo: 'routeA', pathMatch: 'full'},
 { path: 'routeB', loadChildren: 'app/route_b/route_b.module' }
];

export const routing = RouterModule.forRoot(routes);
