import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseFormComponent } from './components/choose-form/choose-form.component';
import { HomeComponent } from './components/home/home.component';
import { InvesmentComponent } from './components/invesment/invesment.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PercentComponent } from './components/percent/percent.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'select-you-must', component: ChooseFormComponent },
  { path: 'percent-law', component: PercentComponent },
  { path: 'investment', component: InvesmentComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
