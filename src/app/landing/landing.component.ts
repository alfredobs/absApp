import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
    $('.sidenav').sidenav();
  }

  navPosts(){
    this.router.navigateByUrl("posts")
  }
  navAlbums(){
    this.router.navigateByUrl("albums")
  }
  navUsers(){
    this.router.navigateByUrl("users")
  }

}
