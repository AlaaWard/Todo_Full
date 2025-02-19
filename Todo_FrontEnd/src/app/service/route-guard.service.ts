import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthinticationService } from './hardcoded-authintication.service';


@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {


  constructor(public HardcodedAuthinticationService: HardcodedAuthinticationService, private router1: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.HardcodedAuthinticationService.isuserlogedin())
      return true;
    this.router1.navigate(["login"]);

    return false;
  }
}
