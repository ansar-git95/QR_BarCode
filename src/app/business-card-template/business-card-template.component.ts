import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
@Component({
  selector: 'app-business-card-template',
  templateUrl: './business-card-template.component.html',
  styleUrls: ['./business-card-template.component.css']
})
export class BusinessCardTemplateComponent implements OnInit {
  userDataList: any[]= [];

  constructor(private userservice: UserListService) { }

  ngOnInit(): void {
    this.getList()
  }

  getList(){
    this.userservice.userList().subscribe((data:any) => {
      this.userDataList = data
      console.log(
        data, 'this is data');
    })
    
    
  }

}
