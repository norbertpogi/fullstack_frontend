import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HellWordBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWoBeanService() {
    const endpoint = 'http://localhost:8080/hello-world-bean';
    return this.http.get<HellWordBean>(endpoint);
  }
}
