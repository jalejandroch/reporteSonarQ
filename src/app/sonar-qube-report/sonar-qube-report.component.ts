import { Component, OnInit } from '@angular/core';
// import report from '../../assets/Json/Report.json';
import { CreateFilesService } from '../services/create-files.service';

@Component({
  selector: 'app-sonar-qube-report',
  templateUrl: './sonar-qube-report.component.html',
  styleUrls: ['./sonar-qube-report.component.css']
})
export class SonarQubeReportComponent implements OnInit {
  public report: any = [];
  public showHide: any = {};

  constructor(
    private getJson: CreateFilesService
  ) { }

  ngOnInit(): void {
    console.log('---> Report')
    this.getJson.getJson('Report').subscribe((res:any ) => {
      this.report = res;
    })
  }

  mostrar(key: any, id: any) {
    console.log('id--', id)
    if (this.showHide[id]) {
      this.showHide[id][key].mostrar = !this.showHide[id][key]?.mostrar;
    } else {
      let init = {
        suggestion: {mostrar: false},
        code: {mostrar: false}
      };
      this.showHide[id] = init;

      this.showHide[id][key].mostrar = !this.showHide[id][key]?.mostrar;

    }
  }

}
