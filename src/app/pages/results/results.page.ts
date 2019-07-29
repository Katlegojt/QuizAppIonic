import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { person } from '../mocks/person';



@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {

  score;
  name;
  percentage;
msg :boolean;
  user: person = new person;


  
  constructor( private route: ActivatedRoute,) { 

    // this.name = this.user.name;
    // this.email = this.user.email;
    
    if(this.score < 4)
    {
      this.msg = true;
    }else{

      this.msg = false;
    }
  
  }

  ngOnInit() {

    this.route.queryParams
    .subscribe(params => {
      this.score = params.score;
      this.name = params.name;
      this.percentage = params.percentage;
     
    });
  }

}
