import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user-service/user.service';
import { Subject, Subscription } from 'rxjs';
import { IUser } from '../../../core/interfaces/user.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})

export class UserListComponent implements OnInit, OnDestroy {
  private destroy: Subject<boolean> = new Subject();
  users: IUser[] = [];
  searchPipe = '';
  subscriptionList: Subscription[] = [];

  constructor(
    private userService: UserService,
  ) {
    this.userService.behaviorAction$
      .subscribe((resp) => {

        if (resp) {
          switch (resp.action) {
            case 'loadUser':
              if (resp.exec) {
                this.getUsers();
              }
              break;

            case 'clearList':
              if (resp.exec) {
                this.users = [];
              }
              break;

            default:
              break;
          }
        }
      });
  }

  ngOnInit(): void { this.getUsers(); }

  getUsers(): void {
    this.subscriptionList.push(
      this.userService.getData()
      .subscribe({
        next: (res) => {
          if (res.length) {
            this.users = res;
          }
        },
        error: (e) => console.error('Error: ', e)
      })
    );
  }

  deleteItem(index: number): void {
    this.users.splice(index, 1);
  }

  ngOnDestroy() {
    if(this.subscriptionList.length){
      this.subscriptionList.forEach(row => row.unsubscribe());
    }
  }
}
