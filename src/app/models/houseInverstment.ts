import { Ivestment } from "./Investment";

export class HouseInvestment implements Ivestment{
  price: number;
  initialPayment: number;
  interestRate: number;
  years: number;
  cdt: number;
  valuation: number;



  constructor(price:number, initialPayment:number, interestRate:number, years:number, cdt:number, valuation:number){
    this.price=price;
    this.initialPayment=initialPayment;
    this.interestRate=interestRate;
    this.years=years;
    this.cdt=cdt;
    this.valuation=valuation;
  }

  installment() {
    throw new Error("Method not implemented.");
  }
  getFuturePrice() {
    throw new Error("Method not implemented.");
  }
  getCostOfEquity() {
    throw new Error("Method not implemented.");
  }
  getEquivalentInvestMent() {
    throw new Error("Method not implemented.");
  }

}
