import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FitnessService } from './../../_services/fitness.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(
    private router:Router,
    private fitnessService:FitnessService
    ) { }

  ngOnInit(): void {
  }
  goSignUp(){
    this.fitnessService.paypalPayment('65').subscribe(res=>{
     console.log('res')
     console.log(res)
    })
    //  this.router.navigateByUrl('/signUp')
  }

}
