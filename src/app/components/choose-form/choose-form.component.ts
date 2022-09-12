import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from'sweetalert2';

@Component({
  selector: 'app-choose-form',
  templateUrl: './choose-form.component.html',
  styleUrls: ['./choose-form.component.css']
})
export class ChooseFormComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.showInstructions();
  }

  goToForm(link:string){
    this.router.navigate([link]);
  }

  showInstructions(){
    swal.fire(
      '',
      'Esta herramienta solo te da un primer acercamiento para comparar si comprar o arrendar, para tomar tu decisión debes estudiar otros factores',
      'success'
    )
  }

}
