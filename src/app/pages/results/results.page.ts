import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { person } from '../mocks/person';
import { PopoverController } from '@ionic/angular';
import { PopoverPage } from 'src/app/popover/popover/popover.page';



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
counter;
networkResults;
cliResults;
  user: person = new person;


  
  constructor( private route: ActivatedRoute, private popoverController : PopoverController) { 

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
      this.networkResults = params.networkResults;
      this.cliResults = params.cliResults;
      this.counter = params.counter;
      this.percentage = params.percentage;
     
    });
  }

  async viewPopover(ev : Event ){
    const popover = await this.popoverController.create({
      component:  PopoverPage,
      event: ev,
      translucent: true,
      componentProps:{
        quiz: this.networkResults,
        quiz1 :this.cliResults
      }
    });
    return await popover.present();
  }

}
