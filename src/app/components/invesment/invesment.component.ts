import { HouseInvestment } from 'src/app/models/houseInverstment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invesment',
  templateUrl: './invesment.component.html',
  styleUrls: ['./invesment.component.css']
})
export class InvesmentComponent implements OnInit {
  displayResult='none';
  investment?:HouseInvestment;
  constructor() { }

  ngOnInit(): void {
  }

  evaluateInvestment($event:any){
    this.investment=$event;
    this.displayResult='block'
  }

}
