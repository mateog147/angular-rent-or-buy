import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-choose-form',
  templateUrl: './choose-form.component.html',
  styleUrls: ['./choose-form.component.css'],
})
export class ChooseFormComponent implements AfterViewInit{
  constructor(private router: Router) {}

  ngAfterViewInit(): void {
    if (!sessionStorage.getItem('siteInit')) {
      this.showInstructions();
      sessionStorage.setItem('siteInit', 'true');
    }
  }

  goToForm(link: string) {
    this.router.navigate([link]);
  }

  showInstructions() {
    swal.fire(
      '',
      'Esta herramienta solo te da un primer acercamiento para comparar si comprar o arrendar, para tomar tu decisión debes estudiar otros factores',
      'success'
    );
  }
}
