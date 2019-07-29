import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {
  myRadio0: string;
  myRadio1: string;
  myRadio2: string;
  myRadio3: string;
  myRadio4: string;
  score: number = 0;

  name;
  email;
  percentage;

  networkQuestions: any[] = ['what does NIC stand for?', 'which level is the physical layer on the TCP/IP OSI model?',
    'Whic one of these is a Loopback address?', 'what is bandwidth of of CAT5 cable?', 'What does LAN stand for?'];
  networkAnswers: string[] = ['Network Interface Card', 'Level 1', '127.0.0.1', '100 Mbps', 'Local Area Network'];






  constructor(private router: Router, private route: ActivatedRoute) {

    
    
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

    if (this.myRadio0 == this.networkAnswers[0]) {
      this.score += 1;
    }
    if (this.myRadio1 == this.networkAnswers[1]) {
      this.score += 1;
    }
    if (this.myRadio2 == this.networkAnswers[2]) {
      this.score += 1;
    }
    if (this.myRadio3 == this.networkAnswers[3]) {
      this.score += 1;
    }
    if (this.myRadio4 == this.networkAnswers[4]) {
      this.score += 1;
    }

    return this.score;

  }


  

  resultsPage() {
    this.score = this.getResuts();
   this.percentage = this.getPer(this.score);
    this.router.navigate(['/results'], { queryParams: { name: this.name , percentage: this.percentage, score:this.score  } });

  }

  getPer(score){

this.percentage= (score/5)*100;
return this.percentage;
  }

  
}
