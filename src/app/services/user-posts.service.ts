import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Post} from '../models/post.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  rootURL:string;
  constructor(private http: HttpClient) {
    this.rootURL = '/api';
  }

  getAllPosts() {
    return this.http.get(`${this.rootURL}/posts`);
  }

  addToFavorites(post: Post, userValue: any) {
    return this.http.post( `${this.rootURL}/addToFavorites`, {post: post, userValue: userValue})
  }
}
