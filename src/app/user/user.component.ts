import { LoginService } from './../service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm,ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User1} from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  
  userLogin=new User1('Swethambari','Swetha27@');
  roleList: any = ['Admin','User'];
  username: string = '';
  psw: string = '';
  role:string='';
  // userform: FormGroup;

  ngOnInit(): void {
  }

  constructor(private router: Router,private loginService:LoginService){}

  btnClick(){
    this.router.navigate(['/login']);
  }
  display(formData: NgForm) {
    console.log(formData.value);

    if (this.role == "admin") {
      console.warn("you are admin");

      this.router.navigate(['/login']);
    }
    else {
 
      console.warn("you are user");

      this.router.navigate(['/table']);
    }
  }
}

