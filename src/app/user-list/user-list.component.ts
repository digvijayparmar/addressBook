import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../user';
import { MatDialog } from '@angular/material';
import { DeleteDialogComponent } from '../dialog/user-delete-dialog.component';
import { userInfo } from 'os';


@Component({
  selector: 'app-products',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  //displayedColumns: string[] = ['first_name', 'last_name','work_phone', 'cell_phone','email_id', 'date_of_birth','street', 'city','state', 'zip_code'];
  displayedColumns: string[] = ['first_name', 'last_name','work_phone','street', 'city','state', 'zip_code','action'];
  data: User[] = [];
  filteredData: User[] = [];
  isLoadingResults = true;
  //listFilter: string;

  private _listFilter: string;

  get listFilter(): string{
      return this._listFilter;
  }
  set listFilter(value: string){
    this.filteredData = value != null ? this.performFilter(value): this.data;
      this._listFilter = value;
  }

  constructor(private api: ApiService, private dialog: MatDialog) { 
    //Enable if you want something to be filtered by default
   // this.listFilter = '';
  }

  performFilter(filterValue: string): User[]{
    filterValue = filterValue.toLocaleLowerCase();
     return this.data.filter((user : User) => user.first_name.toLocaleLowerCase().indexOf(filterValue) !== -1);
  }

  openDeleteDialog(): void {
      let dialogRef = this.dialog.open(DeleteDialogComponent, {
        width: "500px"
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log("Dialog was closed. Response: ", result)
      });
  }

  ngOnInit() {
    this.api.getUsers()
      .subscribe(res => {
        this.data = res;
        this.filteredData = this.data;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}

