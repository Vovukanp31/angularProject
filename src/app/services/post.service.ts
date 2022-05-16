import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private url = 'https://jsonplaceholder.typicode.com/posts';

  getPosts(): Observable<IPost[]> {

    return this.http.get<any[]>(this.url)

  }

}
