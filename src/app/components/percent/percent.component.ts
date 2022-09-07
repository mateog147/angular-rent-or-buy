import { CurrencyPipe } from '@angular/common';
import { PredialService } from './../../services/predial.service';
import { Component, OnInit } from '@angular/core';
import swal from'sweetalert2';

@Component({
  selector: 'app-percent',
  templateUrl: './percent.component.html',
  styleUrls: ['./percent.component.css']
})
export class PercentComponent implements OnInit {
  validForm:boolean = true;
  price:number = 150000000;
  admon:number = 0;
  investmentFund = 12;
  valuation:number = 4;
  predial:number = 0;
  equivalentRent:any = 1;

  constructor(
    private predialService:PredialService,
    private currencyPipe:CurrencyPipe
    ) {  }

  ngOnInit(): void {
    this.showInstructions();
    this.updatePredial();
    this.updateRent();
  }

  changePrice(){
    this.updatePredial();
    this.updateRent();
  }

  updateRent(){
    let percent = this.calculatePercent();
    this.equivalentRent = (this.price * percent / 12)+this.admon;
  }

  calculatePercent() {
    let costOfEquity = (this.investmentFund- this.valuation);
    return (costOfEquity + this.predial + 1) / 100;
  }

  updatePredial() {
    this.predial = this.predialService.getPredialPercent(this.price);
  }

  showInstructions(){
    swal.fire(
      '',
      'Analisis del gasto equivalente en arriendo a los gastos de comprar la casa, sin contar el costo de la cuota',
      'success'
    )
  }

}


