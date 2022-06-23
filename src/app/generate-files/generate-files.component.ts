import { Component, OnInit } from '@angular/core';
import { CreateFilesService } from '../services/create-files.service';
import { writeJsonFile } from 'write-json-file';

@Component({
  selector: 'app-generate-files',
  templateUrl: './generate-files.component.html',
  styleUrls: ['./generate-files.component.css']
})
export class GenerateFilesComponent implements OnInit {
  public total = 0;
  public pages = 400;
  public values: any = [];
  public issues: any = [];
  public rules: any = [];
  public reports: any = [];
  public component: any = [];


  constructor(
    private createFile: CreateFilesService
  ) { }

  async ngOnInit() {
    let inf1 = await this.createFile.downloadIssues(400, 1).toPromise();
    this.values.push(inf1);
    let inf2 = await this.createFile.downloadIssues(400, 2).toPromise();
    this.values.push(inf2);
    await this.getInfo();
    setTimeout(() => {
      const blob = new Blob([JSON.stringify({report: this.reports, total: this.total}, null, 2)], {type : 'application/json'});
      var url= window.URL.createObjectURL(blob);
      window.open(url);

    }, 120000)
  }

  async getRules(ruleId: string) {
    // let name: any;
    // this.values.forEach((val: any) => {
    //   name = val.rules.filter((v: any) => v.key == rule);
    // });
    let rule: any = await this.createFile.getRules(ruleId).toPromise();

    return rule?.rule?.htmlDesc;
  }

  async getRuleDescription(key: string) {
    let desc: any = await this.createFile.getRules(key).toPromise();
    return desc?.rule?.name;
  }
  async getCodes(key: string, component: any) {
    let desc: any = await this.createFile.getCodes(key).toPromise();
    // console.log('---', desc[component].sources)
    return desc[component].sources;
  }

  async getInfo() {
    this.values.forEach(async (val: any) => {
      this.total = val.total;
      val.issues.forEach(async(iss: any, ix: any) => {
        let index = this.component.indexOf(iss.component);
        let desc: any = '';
        if ( index != -1 ) {
          let _iss = {
            id: ix,
            key: iss.key,
            line: iss.line,
            message: iss.message,
            rule: iss.rule,
            ruleName: this.getRules(iss.rule),
            ruleDescription: desc,
            linesCode:  this.getCodes(iss.key, iss.component)
          };

          this.reports[index]?.issues.push(_iss);
        } else {
          let info: any = {
            component: iss.component,
            key: iss.key,
            issues: []
          };

          let _iss = {
            id: ix,
            key: iss.key,
            line: iss.line,
            message: iss.message,
            rule: iss.rule,
            ruleName: this.getRules(iss.rule),
            ruleDescription: desc,
            linesCode:  this.getCodes(iss.key, iss.component)
          };

          info?.issues.push(_iss);
          this.reports.push(info);
          this.component.push(iss.component)
        }
      });
    });
  }

}
