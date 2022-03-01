import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/user-list.service';

@Component({
  selector: 'app-template-one',
  templateUrl: './template-one.component.html',
  styleUrls: ['./template-one.component.css'],
})
export class TemplateOneComponent implements OnInit {
  userDataList: any[] = [];
  cardStyleFront = {
    color:'yellowgreen',
    backgroundColor: '',
    background:'linear-gradient(black, #5e7080)',
    fontStyle: '',
    fontFamily: 'auto',
    width: '29%',
    height: '15rem',
    borderRadius: '4px',
    boxShadow: ' rgb(0 0 0 / 40%) 1px 10px 31px',
    Margin: 'auto',
  };
  cardStyle = {
    color: '',
    backgroundColor: '',
    background: '#f4bb53bf',
    fontStyle: '',
    fontFamily: 'auto',
    width: '29%',
    height: '80%',
    borderRadius: '4px',
    boxShadow: ' rgb(0 0 0 / 40%) 1px 10px 31px',
    Margin: 'auto',
  };
  constructor(private userservice: UserListService) {}

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.userservice.userList().subscribe((data: any) => {
      this.userDataList = data;
      console.log(data, 'this is data');
    });
  }
}
