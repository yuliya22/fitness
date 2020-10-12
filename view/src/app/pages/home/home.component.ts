import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  publicUrl = environment.baseUrl + 'public/image/';


  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  start(){
    localStorage.setItem("isLoggedin","true");
    this.router.navigateByUrl('/payment')
  }

}
