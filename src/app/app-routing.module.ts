import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UvodComponent} from './uvod/uvod.component';
import {OSpolocnostiComponent} from './o-spolocnosti/o-spolocnosti.component';
import {VizitkyLekarovComponent} from './vizitky-lekarov/vizitky-lekarov.component';
import {NovinkyComponent} from './novinky/novinky.component';
import {AmbulancieComponent} from './ambulancie/ambulancie.component';
import {KontaktyComponent} from './kontakty/kontakty.component';
import {NotFoundComponent} from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: UvodComponent},
  {path: 'uvod', redirectTo: '', component: UvodComponent},
  {path: 'o-spolocnosti', component: OSpolocnostiComponent},
  {path: 'vizitky-lekarov', component: VizitkyLekarovComponent},
  {path: 'novinky', component: NovinkyComponent},
  {path: 'ambulancie', component: AmbulancieComponent},
  {path: 'kontakty', component: KontaktyComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  //
}
