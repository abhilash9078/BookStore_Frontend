import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submited=false;

  constructor(private formBuilder: FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      FullName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(8)]],
      MobileNumber: ['', Validators.required],
  },);
  }

  onSubmit() {
    if(this.signupForm.valid){
      console.log("Valid data", this.signupForm.value)
      let data = {
        username: this.signupForm.value.FullName,
        email: this.signupForm.value.Email,
        password: this.signupForm.value.Password,
        password2:this.signupForm.value.Password,
        mobile_no: this.signupForm.value.MobileNumber,
      }
      this.user.Registration(data).subscribe((result:any)=>{
        console.log("Registration Success, and data: ", result)
      })

    }
    else{
      console.log("Invalid data", this.signupForm.value)
    }
  }

}
