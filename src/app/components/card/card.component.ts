import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() userList: any[] = [];
  @Input() cardStyleFr:any;
  @Input() cardStyleObj: any;
  constructor() { }


  ngOnInit(): void {
  }

}
