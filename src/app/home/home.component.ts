import {Component, OnDestroy, OnInit} from '@angular/core';
import { Post } from '../models/post.model';
import { UserService } from '../services/user-posts.service';
import {HttpClient} from "@angular/common/http";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient, private userService: UserService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.userService.getAllPosts().pipe(takeUntil(this.destroy$)).subscribe((posts: any[]) => {
      return this.posts = posts;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  addToFavorites(post: Post) {
    const userValue = this.authService.currentUser;
debugger;
    this.userService.addToFavorites(post, {user: 1234}).pipe(takeUntil(this.destroy$)).subscribe((posts: any[]) => {
      return this.posts = posts;
    });
  }
}
