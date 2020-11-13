import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TextToMorsecodeComponent} from './components/TextMorseCode/text-to-morsecode.component';
import {MorseCodeTextComponent} from './components/morse-code-text/morse-code-text.component';


const routes: Routes = [
  { path: 'text-to-morsecode', component: TextToMorsecodeComponent},
  { path: 'morsecode-to-text', component: MorseCodeTextComponent},
  { path: '', redirectTo: '/text-to-morsecode', pathMatch: 'full'},
  { path: '**', redirectTo: '/text-to-morsecode', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
