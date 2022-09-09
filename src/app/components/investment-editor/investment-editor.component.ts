import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';
import { HouseInvestment } from 'src/app/models/houseInverstment';

@Component({
  selector: 'app-investment-editor',
  templateUrl: './investment-editor.component.html',
  styleUrls: ['./investment-editor.component.css']
})
export class InvestmentEditorComponent implements OnInit {

  @Output() newItemEvent = new EventEmitter< HouseInvestment>();
  investmentForm = this.fb.group({
    price: ['',Validators.required],
    initialPayment: ['',Validators.required],
    interestRate: ['',Validators.required],
    years: ['',Validators.required],
    cdt: ['',Validators.required],
    valuation: ['',Validators.required],
  });
  route: ActivatedRoute | null | undefined;
  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let investment:HouseInvestment;
    investment = new HouseInvestment(
      this.investmentForm.value
    )
    localStorage.setItem("house-investment",JSON.stringify(investment))
    console.log(investment);
    this.router.navigate(['investment/result'],{ relativeTo: this.route })
    //this.newItemEvent.emit(investment);
  }
}
