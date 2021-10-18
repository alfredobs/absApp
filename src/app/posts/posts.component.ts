import { Component, OnInit } from '@angular/core';
import { PostsServiceService } from '../services/posts-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: [] = [];

  constructor( private getposts: PostsServiceService) { }

  ngOnInit(): void {

    this.getposts.getPosts().subscribe( res =>{
      console.log(res);
      this.posts = res;
    });
  }



}
