import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-product-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  product: User = { id: '', first_name: '', last_name: '', work_phone: null, cell_phone: null ,email_id:null,date_of_birth:null,street:null,state:null,city:null,zip_code:null};
  isLoadingResults = true;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.getUserDetails(this.route.snapshot.params['id']);
  }



  getUserDetails(id) {
    this.api.getUserFromJson(id)
      .subscribe(data => {
        this.product = data;
        console.log(this.product);
        this.isLoadingResults = false;
      });
  }


  // getUserDetails(id) {
  //   this.api.getUser(id)
  //     .subscribe(data => {
  //       this.user = data;
  //       console.log(this.user);
  //       this.isLoadingResults = false;
  //     });
  // }

  deleteUser(id) {
    this.isLoadingResults = true;
    this.api.deleteUser(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/user-list']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

}
