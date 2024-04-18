import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  behaviorAction = new BehaviorSubject<{ action: string, exec: boolean, value?: any }>(null);
  behaviorAction$ = this.behaviorAction.asObservable();

  listUsers: IUser[] = [];

  constructor(private _objHttp: HttpClient) {}

  getData(): Observable<IUser[]> {
    return this._objHttp.get<IUser[]>('assets/data/userlist.json');
  }
}
