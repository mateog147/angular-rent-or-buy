import { Injectable } from '@angular/core';
import { HouseInvestment } from '../models/houseInverstment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  investment:HouseInvestment;
  constructor() {
    this.investment = new HouseInvestment(null);
   }


}
