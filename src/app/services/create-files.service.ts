import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateFilesService {
  urlIssue = '/api/issues/search?s=FILE_LINE&resolved=false&types=CODE_SMELL&ps=100&p=1&additionalFields=_all&timeZone=America%2FMexico_City';
  headers: any;

  constructor(
    private httpCliente : HttpClient,
  ) {
    this.headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Basic ' + btoa('admin:admin123')
    });
  }

  downloadIssues(ps: any, page: any): Observable<any> {
    let url = `/api/issues/search?s=FILE_LINE&resolved=false&types=CODE_SMELL&ps=${ps}&p=${page}&additionalFields=_all&timeZone=America/Mexico_City`
		return this.httpCliente.get<any>(url, {headers: this.headers});
  }

  getRules(key: string) {
    let url = `/api/rules/show?key=${key}`;
		return this.httpCliente.get<any>(url, {headers: this.headers});
  }
  getCodes(key: string) {
    console.log('--->')
    let url = `/api/sources/issue_snippets?issueKey=${key}`;
		return this.httpCliente.get<any>(url, {headers: this.headers});
  }

  getJson(catalogName: string) {
		return this.httpCliente.get(`./assets/Json/${catalogName}.json`);
	}

}
