import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-band-signup',
  templateUrl: './band-signup.component.html',
  styleUrls: ['./band-signup.component.css']
})
export class BandSignupComponent implements OnInit {

  public signupform !: FormGroup;
  constructor(private formBuilder :FormBuilder,private http : HttpClient ,private router:Router) { }

  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
      fullname:[''],
      email:[''],
      password:[''],
      lastname:[''],
    })
  }
  signup(){
    this.http.post<any>(""),this.signupform.value)
    .subscribe(res=>{
      alert("signup successfull");
      this.signupform.reset();
      this.router.navigate("requests")
    },err=>{
      alert("domething went wrong")
    })
      
  }
