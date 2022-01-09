import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //***Validation For name,email,phone number***
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  registerForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    phone: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  constructor(private fb: FormBuilder, private ds: DataService, private router: Router) { }

  ngOnInit(): void {
  }


  //***Register Function***
  register() {
    var name = this.registerForm.value.name;
    var email = this.registerForm.value.email;
    var phone = this.registerForm.value.phone;

    //***Validating the Register form */
    if (this.registerForm.valid) {
      var result = this.ds.register(name, email, phone)

      if (result) {
        alert(" New User Registered")
        this.router.navigateByUrl('/details')
      }

      else {
        alert("User Exist. Please Register")
      }
    }
    else {
      alert("Form Invalid")
    }
  }




}

