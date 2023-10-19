import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { user } from '../../pages/users/models';
import { AuthService } from 'src/app/auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export  class ToolbarComponent {

  @Input()
 public drawer?: MatDrawer;

 public authUser$: Observable <user | null>;

constructor (private authService: AuthService) {
  this.authUser$ = this.authService.authUser$;
}


}

