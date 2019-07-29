import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { person } from '../pages/mocks/person';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string = '';
  email: string = '';
  user: person = new person;
  constructor(private router: Router) {



  }


  onSub() {


    this.user.setName(this.name);
    this.user.setEmail(this.email);



    this.router.navigate(['/category'], { queryParams: { name:this.name, email:this.email } });

  }


}
