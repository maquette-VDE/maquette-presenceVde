import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-creation-expert',
  imports: [RouterLink],
  templateUrl: './create-expert.html',
  styleUrl: './create-expert.css'
})
export class CreateExpert {

  constructor(private router : Router){}

  suivant(){
    this.router.navigateByUrl('confirme-expert')
  }

  toExpert(){
    this.router.navigateByUrl('/create-expert')
  }

  toConsultant(){
    this.router.navigateByUrl('/create-consultant')
  }
}
