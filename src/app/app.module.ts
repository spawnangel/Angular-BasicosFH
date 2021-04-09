import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadoresModule } from './componentes/contadores/contadores.module';
import { HeroesModule } from './componentes/heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
