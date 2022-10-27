import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post.model';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {}

  public getAll(): Observable<Post[]> {
    return  this.http.get('https://jsonplaceholder.typicode.com/posts');
    }

}
