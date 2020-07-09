import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {


   addressForm: FormGroup;
   first_name:string='';
   last_name:string='';
   work_phone:string='';
   cell_phone:string='';
  //isLoadingResults: boolean;

   constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

   ngOnInit() {
     this.addressForm = this.formBuilder.group({
       'first_name' : [null, Validators.required],
       'last_name' : [null, Validators.required],
       'work_phone' :[null],
       'cell_phone' :[null],
       'email_id' :[null],
       'date_of_birth' :[null],
       'street' :[null],
       'city' :[null],
       'state' :[null],
       'zip_code' :[null]

     });
   }

   onFormSubmit(form:NgForm) {
     //this.isLoadingResults = true;
     this.api.addUser(form)
       .subscribe(res => {
           let id = res['id'];
       //    this.isLoadingResults = false;
           this.router.navigate(['/user-details', id]);
         }, (err) => {
           console.log(err);
       //    this.isLoadingResults = false;
         });
   }

}
