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

  public getInstallment(){
    let month:number = this.years * 12;
    let rateMonth:number = this.calculateMonthlyRate();
    let response =this.calculateInstallmentFactor(month, rateMonth) * this.calculateFinancedAmount();
    return Math.round(response);
  }

  getFuturePrice() {
    let futurePrice:number = this.price;
    for (let index = 1; index < this.years; index++) {
      futurePrice += (futurePrice * (this.valuation/100));
    }
    return futurePrice;
  }
  getCostOfEquity() {
    let percentAnualCost = 0.015;
    let futurePrice:number = this.price * percentAnualCost;
    futurePrice = futurePrice * this.years;
    return futurePrice;
  }
  getEquivalentInvestMent() {
    let futurePrice:number = this.price * (this.initialPayment / 100);
    for (let index = 1; index < this.years; index++) {
      futurePrice += (futurePrice * (this.cdt/100));
    }
    return futurePrice;
  }

  private calculateFinancedAmount():number {
    return this.price * (1 - (this.initialPayment /100));
  }

  private calculateMonthlyRate() {
    let rate:number = ((this.interestRate/100) + 1);
    rate = rate ** (1/12);
    rate = rate -1;
    return rate;
  }

  private calculateInstallmentFactor(month: number, rateMonth: number): number {
    let numerator:number = ((1+rateMonth)**month)*rateMonth;
    let denominator:number = ((1+rateMonth)**month)-1;
    let installmentFactor = numerator / denominator;
    return installmentFactor;
  }

}
