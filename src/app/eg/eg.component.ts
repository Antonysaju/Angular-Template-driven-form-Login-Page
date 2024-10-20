import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-eg',
  templateUrl: './eg.component.html',
  styleUrls: ['./eg.component.css'],
})
export class EgComponent {
  loginDetails: any = {
    loginid: '',
    pw: '',
  };

  // filedType :any = 'number';

  registerDetails: any = {
    fname: '',
    sname: '',
    userid: '',
    pass: '',
    date: '',
    month: '',
    year: '',
    gender: '',
  };

  // asd: string= "";
  // number = ["1","2", "3", "4", "5"];
  // condition: boolean= true;

  onSubmit(ngForm: any): void {
    // console.log(this.asd);
    alert('Form Submitted');
    console.log(ngForm);

    setTimeout(() => {
      ngForm.resetForm();
    }, 5000);
  }

  onRegister(ngForm: any): void{
    alert('Registered');
    console.log(ngForm);

    setTimeout(() => {
      ngForm.resetForm();
    }, 5000);
  }
}
