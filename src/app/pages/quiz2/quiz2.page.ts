import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz2',
  templateUrl: './quiz2.page.html',
  styleUrls: ['./quiz2.page.scss'],
})
export class Quiz2Page implements OnInit {
  myRadio0: string;
  myRadio1: string;
  myRadio2: string;
  myRadio3: string;
  myRadio4: string;
  score: number = 0;
  percentage;
  counter;
  interval;

  hAnswers: any[] = ['Output Device', 'USB Ports','executes instructions from the software', 'Power Supply', 'Platter' ]
  name;
  email;

  constructor(private router: Router,private route: ActivatedRoute) {
    this.startCountdown();
   }

  ngOnInit() {

    this.route.queryParams
    .subscribe(params => {
      this.name = params.name;
      this.email = params.email;
    });
     
  }
   //calculate score
   getResuts() {

    if (this.myRadio0 == this.hAnswers[0]) {
      this.score += 1;
    }
    if (this.myRadio1 == this.hAnswers[1]) {
      this.score += 1;
    }
    if (this.myRadio2 == this.hAnswers[2]) {
      this.score += 1;
    }
    if (this.myRadio3 == this.hAnswers[3]) {
      this.score += 1;
    }
    if (this.myRadio4 == this.hAnswers[4]) {
      this.score += 1;
    }

    return this.score;

  }
  resultsPage() {
    this.counter= 0;
    this.score = this.getResuts();
    this.percentage = (this.score / 5) * 100;

    this.router.navigate(['/results'], { queryParams: { percentage: this.percentage, score:this.score  } });
  }

  // getPer(score){
  //   this.counter=0;
  //   this.percentage= (score/5)*100;
  //   return this.percentage;
  //     }


      startCountdown() {
        this.counter = 30;
    
        this.interval = setInterval(() => {
    
          this.counter--;
    
          if (this.counter <= 0) {
    
            // The code here will run when
            // the timer has reached zero.
            clearInterval(this.interval);
            this.getResuts();
            this.percentage = (this.score / 5) * 100;
            this.router.navigate(['/results'], { queryParams: { counter: this.counter, percentage: this.percentage, score: this.score } });
    
            console.log('Ding!');
          };
        }, 1000);
    
        return this.counter;
      }
}
