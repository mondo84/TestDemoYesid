import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';

@Pipe({ name: 'filterPipe' })
export class FilterPipe implements PipeTransform {
  transform(users: IUser[], searchTerm: string): IUser[] {
    if (!users || !searchTerm) {
      return users;
    }
    searchTerm = searchTerm.toLowerCase();

    return users.filter((user) => user.name.toLowerCase().includes(searchTerm) || user.email.toLowerCase().includes(searchTerm));
  }
}
