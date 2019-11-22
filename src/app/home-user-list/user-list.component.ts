import { Component, OnInit } from '@angular/core';
import { User } from '../User';
// import { forkJoin } from 'rxjs';

// USING A SERVICE INSTEAD
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [ UserService]
})
export class UserListComponent implements OnInit {
  users1: User[];
  users2: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsersPg1();
    this.getUsersPg2();
  }
  getUsersPg1() {
    this.userService.getUsersPg1()
      .subscribe(users => this.users1 = users.data);
  }
  getUsersPg2() {
    this.userService.getUsersPg2()
      .subscribe(users => this.users2 = users.data);
  }
}
