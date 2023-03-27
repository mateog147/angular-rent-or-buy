import { CurrencyPipe } from '@angular/common';
import { PredialService } from '../../services/predial.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-percent',
  templateUrl: './percent.component.html',
  styleUrls: ['./percent.component.css'],
})
export class SixPercentComponent implements OnInit {
  validForm: boolean = true;
  price: number = 0;
  rent: any = 0;
  percent: number = 0;

  constructor(
    private predialService: PredialService,
    private currencyPipe: CurrencyPipe
  ) {}

  ngOnInit(): void {
    //this.updatePredial();
  }

  changePrice() {
    this.calculatePercent();
  }

  calculatePercent() {
    if (this.rent > 0 && this.price > 0) {
      this.percent = (this.rent * 12) / this.price;
    }
  }
}
