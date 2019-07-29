import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.page.html',
  styleUrls: ['./quiz1.page.scss'],
})
export class Quiz1Page implements OnInit {

  myRadio0: string;
  myRadio1: string;
  myRadio2: string;
  myRadio3: string;
  myRadio4: string;
  score: number = 0;
  name;
  
  percentage;

  cliQuestions: string[] = ['which command would you use to show a list of directories?', 'what is the MKDIR command used for?', 'which command is used for copying',
  'What is the ifConfig command used for?', 'what does BASH stand for?'];
cliAnswers: string[] = ['ls', 'create new directory', 'cp', ' displaying current network configuration information', '	Bourne Again SHell'];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams
    .subscribe(params => {
      this.name = params.name;
     
    });
  }
    //calculate score
    getResuts() {

      if (this.myRadio0 == this.cliAnswers[0]) {
        this.score += 1;
      }
      if (this.myRadio1 == this.cliAnswers[1]) {
        this.score += 1;
      }
      if (this.myRadio2 == this.cliAnswers[2]) {
        this.score += 1;
      }
      if (this.myRadio3 == this.cliAnswers[3]) {
        this.score += 1;
      }
      if (this.myRadio4 == this.cliAnswers[4]) {
        this.score += 1;
      }
  
      return this.score;
  
    }
    resultsPage() {
      this.score = this.getResuts();
      this.percentage = this.getPer(this.score);
      this.router.navigate(['/results'], { queryParams: { percentage: this.percentage, score:this.score  } });
  
    }
    getPer(score){

      this.percentage= (score/5)*100;
      return this.percentage;
        }
      

}
