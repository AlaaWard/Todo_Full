import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { routes } from '../app.routes';
import { HardcodedAuthinticationService } from '../service/hardcoded-authintication.service';
import { BasicAuthenticationService } from '../service/basic-authintication.service';

// import { BasicAuthenticationService } from '../service/basic-authentication.service';


@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {
 
  ngOnInit(): void {

  }

  username = "alaaward"
  password = "ward"
  invalid = false;

  constructor(private router1: Router, public HardcodedAuthinticationService: HardcodedAuthinticationService,
    public basicAuthinticationService: BasicAuthenticationService
  ) {

  }
  handel() {
    if (this.HardcodedAuthinticationService.authenticate(this.username, this.password)) {
      this.router1.navigate(["welcome", this.username])
      this.invalid = false;
    }
    else {
      this.invalid = true;
    }
  }

  handelbasic() {
    this.basicAuthinticationService.executeAuthenticationService(this.username, this.password).subscribe
      (data => {
        console.log(data)
        this.router1.navigate(["welcome", this.username]);
        this.invalid = false;
      },
        error => {
          console.log(error)
          this.invalid = true;
        }
      )
  }
  handleJWTAuthLogin() {
    this.basicAuthinticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router1.navigate(['welcome', this.username])
            this.invalid = false
          },
          error => {
            console.log(error)
            this.invalid = true
          }
        )
  }

}


