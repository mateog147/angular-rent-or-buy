import { Ivestment } from "./investment";

export class HouseInvestment implements Ivestment{
  price: number;
  initialPayment: number;
  interestRate: number;
  years: number;
  cdt: number;
  valuation: number;

  constructor(investment:any){
    this.price=investment.price;
    this.initialPayment=investment.initialPayment;
    this.interestRate=investment.interestRate;
    this.years=investment.years;
    this.cdt=investment.cdt;
    this.valuation=investment.valuation;
  }

  installment() {
    let month = this.years * 12;
    let rateMonth = this.calculateMonthlyRate();

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

  private calculateMonthlyRate() {
    let rate:number = (this.interestRate + 1);
    rate = rate **(1/12);
    rate = rate -1;
    return rate;
  }

}
