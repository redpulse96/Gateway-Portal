import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AuthService } from "./auth.services";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private _router: Router, private _auth: AuthService){

    }

  canActivate():boolean {
    console.log('i am checking to see if you are logged in');
    if (!this._auth.currentUserValue) {
        this._router.navigate(['login']);
        return false;
    }
    return true;
  }

  canActivateChild():boolean {
    console.log('checking child route access');
    if (!this._auth.currentUserValue) {
        this._router.navigate(['login']);
        return false;
    }
    return true;
  }

}