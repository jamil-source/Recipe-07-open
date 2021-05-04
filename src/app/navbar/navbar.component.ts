import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStateService } from '../shared/auth-state.service';
import { TokenService } from '../shared/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  isSignedIn: boolean;

  constructor(private router:Router, private auth: AuthStateService, public token: TokenService) { }

  ngOnInit() {
    this.auth.userAuthState.subscribe(val => {
        this.isSignedIn = val;
    });
    document.addEventListener("scroll",this.scrollFixed);
  }

  scrollFixed(){
    var nav = document.getElementById('nav');    
    if (window.pageYOffset > 10) {
      nav.classList.add("fixed-top");
    } else {
      nav.classList.remove("fixed-top");
    }
  }

  onNavigate(){
    this.router.navigate(['/mylist'])
  }

  signOut() {
    this.auth.setAuthState(false);
    this.token.removeToken();
    this.router.navigate(['login']);
  }

}
