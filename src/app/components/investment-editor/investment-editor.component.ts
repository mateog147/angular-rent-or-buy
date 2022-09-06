import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-investment-editor',
  templateUrl: './investment-editor.component.html',
  styleUrls: ['./investment-editor.component.css']
})
export class InvestmentEditorComponent implements OnInit {

  investmentForm = this.fb.group({
    price: ['',Validators.required],
    initialPayment: ['',Validators.required],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.investmentForm.value);
  }
}
