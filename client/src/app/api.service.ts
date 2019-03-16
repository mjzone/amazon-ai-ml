import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  ENDPOINT = 'https://461xegl8zf.execute-api.us-east-1.amazonaws.com/dev';

  constructor(private http:HttpClient) {}

  speak(data) {
    return this.http.post(this.ENDPOINT + '/speak', data);
  }

  analyze(data) {
    return this.http.post(this.ENDPOINT + '/analyze', data);
  }
}