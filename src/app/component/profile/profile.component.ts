import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/userService/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user_details:any

  constructor(private user:UserService) { }

  ngOnInit(): void {
    this.get_profile_details()
  }

  get_profile_details(){
    console.log('get all book api is called')
    this.user.Profile().subscribe((res:any)=>{
      console.log(res)
      this.user_details = res.data
      console.log(this.user_details)
    })
  }
}
