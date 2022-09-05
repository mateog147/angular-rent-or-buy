import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-form',
  templateUrl: './choose-form.component.html',
  styleUrls: ['./choose-form.component.css']
})
export class ChooseFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToForm(link:string){
    this.router.navigate([link]);
  }

}
