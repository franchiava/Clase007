import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifierService } from 'src/app/core/services/notifier.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styles: [
  ]
})
export class UsersDetailComponent {
  constructor (private activatedRoute: ActivatedRoute, private Router:Router, private Notification: NotifierService ) {
    console.log(this.activatedRoute.snapshot.params['id'])
    console.log(this.activatedRoute.snapshot.paramMap.get('id'))
    if (!Number(this.activatedRoute.snapshot.params['id'])){

      this.Router.navigate(['dashboard', 'users']);
      this.Notification.showError( 'No es un ID valido' )
    }
  }

  loadUser(): void {
    
  }

}
