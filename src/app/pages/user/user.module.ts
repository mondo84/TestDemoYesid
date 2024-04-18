import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/core/pipes/search-pipe/filter.pipe';

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
