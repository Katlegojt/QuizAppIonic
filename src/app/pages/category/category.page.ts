import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  name;
  email;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams
    .subscribe(params => {
      this.name = params.name;
      this.email = params.email;
    });
  }

  onNetworkSub() {
    this.router.navigate(['/quiz'], { queryParams: { name: this.name , email: this.email  } });

  }
  onCLISub() {

    this.router.navigate(['/quiz1'], { queryParams: { name: this.name , email: this.email  } });
  }
  onHardwareSub() {
    this.router.navigate(['/quiz2'], { queryParams: { name: this.name , email: this.email  } });

  }
}
