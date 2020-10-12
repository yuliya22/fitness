import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn:'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate() {
        if (localStorage.getItem('isLoggedin')) {
            console.log('sdf')
            return true;
        }

        this.router.navigate(['/home']);
        return false;
    }
}
