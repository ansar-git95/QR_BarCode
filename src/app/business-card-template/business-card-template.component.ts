import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';
@Component({
  selector: 'app-business-card-template',
  templateUrl: './business-card-template.component.html',
  styleUrls: ['./business-card-template.component.scss'],
})
export class BusinessCardTemplateComponent implements OnInit {
  // userDataList: any[] = [];
  display=false
  textColor = '';
  backColor = '';
  // cardStyle = {
  //   color:'',
  //   backgroundColor: '#f4bb53bf',
  //   fontStyle: '',
  //   fontFamily: 'auto',
  //   width: '29%',
  //   borderRadius: '4px',
  //   boxShadow: ' rgb(0 0 0 / 40%) 1px 10px 31px',
  //   Margin: 'auto',
  // };

  constructor(private userservice: UserListService) {}

  ngOnInit(): void {
  }

  // getList() {
  //   this.userservice.userList().subscribe((data: any) => {
  //     this.userDataList = data;
  //     console.log(data, 'this is data');
  //   });
  // }
  // textColorChange() {
  //   console.log('text--->', this.textColor);
  //   this.cardStyle.color = this.textColor;
  // }

  // bgColorChange(){
  //   this.cardStyle.backgroundColor = this.backColor;
  // }
}
