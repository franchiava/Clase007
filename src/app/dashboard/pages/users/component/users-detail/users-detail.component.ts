import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { user } from '../../models';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styles: [
  ]
})
export class UsersDetailComponent {
public user: user | null = null;
public userId?: number;


  constructor ( private activatedRoute: ActivatedRoute,
    private Router:Router, 
    private Notification: NotifierService,
    private userService: UserService){
      
    console.log(this.activatedRoute.snapshot.params['id'])
    console.log(this.activatedRoute.snapshot.paramMap.get('id'))
    
    if (!Number(this.activatedRoute.snapshot.params['id'])){

      this.Router.navigate(['dashboard', 'users']);
      this.Notification.showError( 'No es un ID valido' )
    } else {
      this.userId = Number (this.activatedRoute.snapshot.params['id']);
      this.loadUser
    }
  }

  loadUser(): void {
    if (this.userId) {
      this.userService.getUserById(this.userId).subscribe({
        next: (user) => console.log(user),
      })
    }
    
  }

}
