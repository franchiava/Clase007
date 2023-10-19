import { Component, EventEmitter, Input, Output } from '@angular/core';
import { user } from '../../models';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})


export class UsersTableComponent {
  displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'Actions'];

  @Input()

  dataSource: user[] = [];

  @Output()

  deleteUser = new EventEmitter<user>();

  @Output()

  editUser= new EventEmitter<user>();
  
}
