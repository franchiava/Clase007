import { Component, EventEmitter, Input, Output } from '@angular/core';
import { user } from '../../models';


const ELEMENT_DATA: user[] = [
  {
    id: 1,
    name: 'Franco',
    surname: 'Chiavassa',
    email: 'fraancotiago@gmail.com',
    password: 'luispedro',
  }, 
  {
    id: 2,
    name: 'Franco',
    surname: 'Chiavassa',
    email: 'fraancotiago@gmail.com',
    password: 'luispedro',
  },
  {
    id: 3,
    name: 'Guillermo',
    surname: 'Chiavassa',
    email: 'fraancotiago@gmail.com',
    password: 'luispedro',
  },
  {
    id: 4,
    name: 'Sol',
    surname: 'Chiavassa',
    email: 'fraancotiago@gmail.com',
    password: 'luispedro',
  },
  {
    id: 5,
    name: 'Jose',
    surname: 'Chiavassa',
    email: 'fraancotiago@gmail.com',
    password: 'luispedro',
  }

];

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
