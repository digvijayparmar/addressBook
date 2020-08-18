import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-delete-dialog',
  templateUrl: './user-delete-dialog.component.html',
  styleUrls: ['./user-delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(private dialogRef : MatDialogRef<DeleteDialogComponent>, 
              private api: ApiService,
              private router: Router,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    console.log("Inside Ng on int delete Dialog")
  }

  deleteUser(id){
   // console.log("Delete user confirmation- Delete");
    //this.router.navigate(['/user-list']);
    this.api.deleteUser(id).subscribe(res =>{
      console.log("USer delete success for ID: "+ id);
      this.dialogRef.close("Delete Confirmed");
      this.router.navigate(['/user-list']);

    },
    err => {
      console.log(err);
    })

  }

  dismissDialog(){
    console.log("Dismissing Dialog delete component");
    this.dialogRef.close(null);
    this.router.navigate(['/user-list']);
  }
}
