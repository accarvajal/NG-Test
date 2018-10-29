import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;

  constructor(private route: ActivatedRoute, private router: Router, private _data: DataService) {
    this.route.params.subscribe(response => console.log(response.id));
  }

  ngOnInit() {
    this._data.goal.subscribe(response => this.goals = response);
  }

  redirectToHome() {
    this.router.navigate(['']); // Same path as indicated in routes array for HomeComponent
  }
}
