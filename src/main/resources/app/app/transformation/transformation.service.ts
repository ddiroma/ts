import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class Result {
  fieldNames: Array<string>;
  data: Array<Array<string>>;
}

@Injectable()
export class TransformationService {
  private baseUrl: string = 'http://localhost:9051/cxf/spoon/';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  save(path: String, content: String): Promise<Result> {
    return this.http.post(this.baseUrl + 'save', JSON.stringify({path: path, content: content}), {headers: this.headers})
               .toPromise()
               .then(response => response.json() as Result)
               .catch(this.handleError);
  }

  run(path: String, stepName: String): Promise<Result> {
    console.log("run");
    return this.http.post(this.baseUrl + 'run', JSON.stringify({path: path, stepName: stepName}), {headers: this.headers})
               .toPromise()
               .then(response => response.json() as Result)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
