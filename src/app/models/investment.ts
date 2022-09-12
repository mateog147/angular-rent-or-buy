export interface Ivestment{
  price:number;
  initialPayment:number;
  interestRate:number;
  years:number;
  cdt:number;
  valuation:number;
  getInstallment():any;
  getFuturePrice():any;
  getCostOfEquity():any;
  getEquivalentInvestMent():any;
}
