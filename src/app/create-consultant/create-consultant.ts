import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-create-consultant',
  imports: [RouterLink],
  templateUrl: './create-consultant.html',
  styleUrl: './create-consultant.css',
})
export class CreateConsultant {

   constructor(private router : Router){}

  suivant(){
    this.router.navigateByUrl('confirme-consultant')
  }

  toExpert(){
    this.router.navigateByUrl('create-expert')
  }

  toConsultant(){
    this.router.navigateByUrl('create-consulant')
  }
}

