import { Component, OnInit } from '@angular/core';
import { DataReport } from 'src/assets/infoReport';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'sonar-Report';
  report: any = [];
  component: any = [];

  constructor(
  ) {}

  ngOnInit() {
  }

}
