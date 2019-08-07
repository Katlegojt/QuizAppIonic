import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  quiz;
  quiz1;
  constructor(private navParams: NavParams, private popoverController: PopoverController,) { }

  ngOnInit() {
    this.quiz = this.navParams.get('quiz');
    this.quiz1 = this.navParams.get('quiz1');
  }

}
