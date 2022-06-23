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
    // console.log('holiii', DataReport)
    // // let issues = DataReport[0].issues;
    // DataReport.forEach((val: any) => {
    //   val.issues.forEach((iss: any) => {
    //     let index = this.component.indexOf(iss.component);
    //     console.log('index... ', index)
    //     if ( index != -1 ) {
    //       let _iss = {
    //         key: iss.key,
    //         line: iss.line,
    //         message: iss.message
    //       };
    //       this.report[index]?.issues.push(_iss);
    //     } else {
    //       let info: any = {
    //         component: iss.component,
    //         issues: [],

    //         tag: '#collapse'+iss.key,
    //         id: 'collapse'+iss.key
    //       };

    //       let _iss = {
    //         key: iss.key,
    //         line: iss.line,
    //         message: iss.message
    //       };

    //       info?.issues.push(_iss);
    //       this.report.push(info);
    //       this.component.push(iss.component)




    //     }
    //     // let info: any = {
    //     //   key: iss.key,
    //     //   component: iss.component,
    //     //   line: iss.line,
    //     //   message: iss.message,
    //     //   tag: '#collapse'+iss.key,
    //     //   id: 'collapse'+iss.key
    //     // };

    //     // this.report.push(info);
    //   });
    // })

  }

  // downloadFile(): Observable<HttpResponse<Blob>>{
	// 	return this.http.get('http://localhost:8080/employees/download', { responseType: ResponseContentType.Blob });
  // }
  // makeHttpObject() {
  //   if("XMLHttpRequest" in window) return new XMLHttpRequest();
  //   // else if("ActiveXObject" in window) return new ActiveXObject("Msxml2.XMLHTTP");
  // }

  // getHtml() {
  //   let request = this.makeHttpObject();
  //   request.open("GET", "/", true);
  //   request.send(null);
  //   request.onreadystatechange = function() {
  //     if (request.readyState == 4)
  //       console.log(request.responseText);
  //   };
  // }

}
