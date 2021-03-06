import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../models/IComment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }

  private url = 'https://jsonplaceholder.typicode.com/comments';

  getComments(): Observable<IComment[]> {

    return this.http.get<any[]>(this.url)

  }

}
