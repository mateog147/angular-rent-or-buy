import { Component, Input, OnInit } from '@angular/core';
import { HouseInvestment } from 'src/app/models/houseInverstment';

@Component({
  selector: 'app-result-investment',
  templateUrl: './result-investment.component.html',
  styleUrls: ['./result-investment.component.css']
})
export class ResultInvestmentComponent implements OnInit {

  houseInvestment?: HouseInvestment = new HouseInvestment({});

  constructor() { }

  ngOnInit(): void {
    this.getInvestment();
  }

  getInvestment() {
    if (localStorage.getItem('house-investment')) {
      this.houseInvestment = new HouseInvestment(JSON.parse(localStorage.getItem('house-investment')!));
    }
  }

  installment(){
    if(this.houseInvestment?.price){
      return this.houseInvestment.getInstallment();
    }
    return 0;
  }

  getPeriod(){
    if(this.houseInvestment?.years){
      return this.houseInvestment.years;
    }
    return 0;
  }

  futurePrice(){
    if(this.houseInvestment?.valuation){
      return this.houseInvestment.getFuturePrice();
    }
    return 0;
  }

  initialPay(){
    if(this.houseInvestment?.initialPayment){
      return this.houseInvestment.price * (this.houseInvestment.initialPayment / 100);
    }
    return 0;
  }

  equivalentFuturePrice(){
    if(this.houseInvestment?.price){
      return this.houseInvestment.getEquivalentInvestMent();
    }
    return 0;
  }

  saving(){
    if(this.houseInvestment?.initialPayment){
      return this.houseInvestment.getCostOfEquity();
    }
    return 0;
  }

  price(){
    if(this.houseInvestment?.price){
      return this.houseInvestment.price;
    }
    return 0;
  }


}
