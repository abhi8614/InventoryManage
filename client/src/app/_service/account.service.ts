import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debug } from 'console';
import { ILogin } from '../_models/login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  login(login: ILogin) {
    debug;
    this.http.post(`https://localhost:7177/account/login`, login);
  }
}
