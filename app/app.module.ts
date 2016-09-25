import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { RouteAModule }   from './route_a/route_a.module';
//import { routing, appRoutingProviders }  from './app.routing';
import { routing }  from './app.routing';

@NgModule({
  imports: [BrowserModule, routing, RouteAModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
