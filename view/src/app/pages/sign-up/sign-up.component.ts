import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FitnessService } from './../../_services/fitness.service';
import Swal  from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  submitted: boolean = false;
  activities = [
    'Sedentary - you spend a lot of time sitting at a desk (bank teller, desk job, graphic designer, customer service)',
    'Light Activity - Spend a good part of the day on your feet (teacher, salesman, barber)',
    'Moderate - Spend a good part of the day doing physical activity (waitress, mailman)',
    'Very Active - Spend most of the day doing heavy physical activity (mail man, carpenter, construction worker, warehouse jobs, full time dancer)'
  ]

  constructor(
    private formBuilder: FormBuilder,
    private fitnessService :FitnessService
    ) { }

  ngOnInit(): void {

    this.signUpForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      gender: ['male', Validators.required],
      age: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      height: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      currentWeight: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      goalWeight: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      reduceFat: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      activity: ['', Validators.required],
      exercisePerWeek: '',
      minutesPerDay: '',
      dislikeFoodOrAllergy: '',
      favoriteFood: '',
      eatHabit: '',
      couch: '',
      hear: '',
      instagram: '',
      email: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$'), Validators.required]],
      // confirmEmail: ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$'), Validators.required]],
      addInfo: '',
      promoCode: ''

    });
  }
  get f() { return this.signUpForm.controls; }

  register() {
    this.submitted = true;
    if (this.signUpForm.invalid)
      return;

    const fullName = this.f.fullName.value;
    const gender = this.f.gender.value;
    const age = this.f.age.value;
    const height = this.f.height.value;
    const currentWeight = this.f.currentWeight.value;
    const goalWeight = this.f.goalWeight.value;
    const reduceFat = this.f.reduceFat.value;
    const activity = this.f.activity.value;
    const exercisePerWeek = this.f.exercisePerWeek.value;
    const minutesPerDay = this.f.minutesPerDay.value;
    const dislikeFoodOrAllergy = this.f.dislikeFoodOrAllergy.value;
    const favoriteFood = this.f.favoriteFood.value;
    const eatHabit = this.f.eatHabit.value;
    const couch = this.f.couch.value;
    const hear = this.f.hear.value;
    const instagram = this.f.instagram.value;
    const email = this.f.email.value;
    const addInfo = this.f.addInfo.value;
    const promoCode = this.f.promoCode.value;
    const sendData={
      fullName,gender,age,height,currentWeight,goalWeight,reduceFat,activity,
      exercisePerWeek,minutesPerDay,dislikeFoodOrAllergy,favoriteFood,
      eatHabit,couch,hear,instagram,email,addInfo,promoCode
    }
    console.log('sendData')
    console.log(sendData)

    this.fitnessService.saveRegister(sendData).subscribe(res=>{
      console.log('res')
      console.log(res)
      if(res){
        Swal.fire('Registered Successfully!')
        this.submitted=false;
      }
    })



  }

}
