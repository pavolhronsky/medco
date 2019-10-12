import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OSpolocnostiComponent} from './o-spolocnosti/o-spolocnosti.component';
import {AmbulancieComponent} from './ambulancie/ambulancie.component';
import {VizitkyLekarovComponent} from './vizitky-lekarov/vizitky-lekarov.component';
import {UvodComponent} from './uvod/uvod.component';
import {NovinkyComponent} from './novinky/novinky.component';
import {NavigaciaComponent} from './navigacia/navigacia.component';
import {KontaktyComponent} from './kontakty/kontakty.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    OSpolocnostiComponent,
    AmbulancieComponent,
    VizitkyLekarovComponent,
    UvodComponent,
    NovinkyComponent,
    NavigaciaComponent,
    KontaktyComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  //
}
