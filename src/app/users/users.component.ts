import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../services/users-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: [] = []

  constructor( private getUsers: UsersServiceService) { }

  ngOnInit(): void {
    this.getUsers.getUsers().subscribe( res =>{
      console.log(res);
      this.users = res;
    });
  }

}
