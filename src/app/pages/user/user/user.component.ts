import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user-service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private objUserService: UserService) {}

  ngOnInit(): void {}

  getUserList(): void {
    this.objUserService.behaviorAction.next({
      action: 'loadUser',
      exec: true
    });
  }

  removeAll(): void {
    this.objUserService.behaviorAction.next({
      action: 'clearList',
      exec: true
    });
  }
}
