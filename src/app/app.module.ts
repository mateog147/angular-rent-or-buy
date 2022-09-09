import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ChooseFormComponent } from './components/choose-form/choose-form.component';
import { PercentComponent } from './components/percent/percent.component';
import { InvesmentComponent } from './components/invesment/invesment.component';
import { CurrencyPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InvestmentEditorComponent } from './components/investment-editor/investment-editor.component';
import { ResultInvestmentComponent } from './components/result-investment/result-investment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    ChooseFormComponent,
    PercentComponent,
    InvesmentComponent,
    InvestmentEditorComponent,
    ResultInvestmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
