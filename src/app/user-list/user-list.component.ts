import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';

@Component({
  selector: 'app-products',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  //displayedColumns: string[] = ['first_name', 'last_name','work_phone', 'cell_phone','email_id', 'date_of_birth','street', 'city','state', 'zip_code'];
  displayedColumns: string[] = ['first_name', 'last_name','work_phone','street', 'city','state', 'zip_code'];
  data: User[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getUsers()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
