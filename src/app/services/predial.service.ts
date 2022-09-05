import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PredialService {

  values = [
    {
      housePrice: 99000000,
      factor:5.5
    },
    {
      housePrice: 105000000,
      factor:5.6
    },
    {
      housePrice: 122000000,
      factor:5.7
    },
    {
      housePrice: 137000000,
      factor:5.8
    },
    {
      housePrice: 153000000,
      factor:5.9
    },
    {
      housePrice: 170000000,
      factor:6
    },
    {
      housePrice: 185000000,
      factor:6.1
    },
    {
      housePrice: 201000000,
      factor:6.2
    },
    {
      housePrice: 228000000,
      factor:6.3
    },
    {
      housePrice: 254000000,
      factor:6.4
    },
    {
      housePrice: 281000000,
      factor:6.5
    },
    {
      housePrice: 308000000,
      factor:6.6
    },
    {
      housePrice: 334000000,
      factor:6.8
    },
    {
      housePrice: 361000000,
      factor:7
    },
    {
      housePrice: 388000000,
      factor:7.2
    },
    {
      housePrice: 415000000,
      factor:7.4
    },
    {
      housePrice: 441000000,
      factor:7.6
    },
    {
      housePrice: 478000000,
      factor:7.8
    },
    {
      housePrice: 516000000,
      factor:8
    },
    {
      housePrice: 590000000,
      factor:8.4
    },
    {
      housePrice: 627000000,
      factor:8.6
    },
    {
      housePrice: 702000000,
      factor:9
    },


  ]

  constructor() { }

  getPredial(price:number){
    let factor = this.getPredialFactor(price);
    return (price * factor) / 1000;
  }

  getPredialPercent(price:number){
      let cost =  this.getPredial(price);
      let res = ((cost / price) * 100).toFixed(2)
      return parseFloat(res);
  }

  private getPredialFactor(price:number){
      for (let element of this.values) {
        if(price <= element.housePrice){
          return element.factor;
        }
      }
      return 10;
  }


}
