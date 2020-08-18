import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { DeleteDialogComponent } from '../dialog/user-delete-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-product-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  UserForm: FormGroup;
  id:string='';
  first_name:string='';
  last_name:string='';
  email_id:string='';
  work_phone:string='';
  cell_phone:string='';
  date_of_birth:string='';
  street:string='';
  city:string='';
  state:string='';
  zip_code:string='';
  navigation_action:string='';
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder, private dialog: MatDialog) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.params['id']);
    this.navigation_action = this.route.snapshot.params['read-only'];
      this.UserForm = this.formBuilder.group({
      'first_name' : [null, Validators.required],
      'last_name' : [null, Validators.required],
      'work_phone' : [null],
      'cell_phone' : [null],
      'email_id' : [null, Validators.required],
      'date_of_birth' : [null],
      'street' : [null],
      'city' : [null],
      'state' : [null],
      'zip_code' : [null],
    });
    if(this.navigation_action){
      this.UserForm.disable();
    }
  }

  getUser(id) {
    this.api.getUser(id).subscribe(data => {
      this.id = data.id;
      this.UserForm.setValue({
        first_name: data.first_name,
        last_name: data.last_name,
        work_phone: data.work_phone,
        cell_phone: data.cell_phone,
        email_id: data.email_id,
        date_of_birth: data.date_of_birth,
        street: data.street,
        city: data.city,
        state: data.state,
        zip_code: data.zip_code
      });
    });
  }

  openDeleteDialog(): void {
    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: "500px"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog was closed. Response: ", result)
    });
}

  onFormSubmit(form:NgForm) {
  //  this.isLoadingResults = true;
    this.api.updateUser(this.id, form)
      .subscribe(res => {
          let id = res['id'];
       //   this.isLoadingResults = false;
          this.router.navigate(['/user-details', id]);
        }, (err) => {
          console.log(err);
       //   this.isLoadingResults = false;
        }
      );
  }

  UserDetails() {
    this.router.navigate(['/user-details', this.id]);
  }

}
