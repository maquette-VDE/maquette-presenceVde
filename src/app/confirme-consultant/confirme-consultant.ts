import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirme-consultant',
  imports: [],
  templateUrl: './confirme-consultant.html',
  styleUrl: './confirme-consultant.css',
})
export class ConfirmeConsultant {

  constructor(private router : Router){}

  retour(){
    this.router.navigateByUrl('create-consultant')
  }
}
