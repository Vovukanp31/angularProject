import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../models/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) {

  }

  private url = 'https://jsonplaceholder.typicode.com/users'

  getUsers(): Observable<IUser[]> {

    return this.http.get<any[]>(this.url)

  }

  getUser(id: number): Observable<IUser> {

    return this.http.get<any>(this.url + '/' + id)

  }

}
