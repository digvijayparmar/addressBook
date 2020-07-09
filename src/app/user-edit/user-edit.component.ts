import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  ngOnInit() {
  }

  // UserForm: FormGroup;
  // _id:string='';
  // first_name:string='';
  // last_name:string='';
  // prod_price:number=null;
  // isLoadingResults = false;

  // constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  // ngOnInit() {
  //   this.getUser(this.route.snapshot.params['id']);
  //   this.UserForm = this.formBuilder.group({
  //     'prod_name' : [null, Validators.required],
  //     'prod_desc' : [null, Validators.required],
  //     'prod_price' : [null, Validators.required]
  //   });
  // }

  // getUser(id) {
  //   this.api.getUser(id).subscribe(data => {
  //     this._id = data._id;
  //     this.UserForm.setValue({
  //       prod_name: data.prod_name,
  //       prod_desc: data.prod_desc,
  //       prod_price: data.prod_price
  //     });
  //   });
  // }

  // onFormSubmit(form:NgForm) {
  //   this.isLoadingResults = true;
  //   this.api.updateUser(this._id, form)
  //     .subscribe(res => {
  //         let id = res['_id'];
  //         this.isLoadingResults = false;
  //         this.router.navigate(['/user-details', id]);
  //       }, (err) => {
  //         console.log(err);
  //         this.isLoadingResults = false;
  //       }
  //     );
  // }

  // UserDetails() {
  //   this.router.navigate(['/user-details', this._id]);
  // }

}
