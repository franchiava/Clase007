import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  constructor (private router: Router , private activatedRoute: ActivatedRoute, private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['auth','login'])
    
  }

}
 