import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-three',
  templateUrl: './template-three.component.html',
  styleUrls: ['./template-three.component.css']
})
export class TemplateThreeComponent implements OnInit {

  cardStyleFront = {
    color:'yellowgreen',
    backgroundColor: '',
    background:'#0000009c',
    fontStyle: '',
    fontFamily: 'auto',
    width: '29%',
    height: '13rem',
    borderRadius: '50px 0px 50px 0px',
    boxShadow: ' rgb(0 0 0 / 40%) 12px 10px 31px',
    Margin: 'auto',
  };
  cardStyle = {
    color: '',
    backgroundColor: '',
    background: 'white',
    fontStyle: '',
    fontFamily: 'auto',
    width: '29%',
    height: '80%',
    borderRadius: '0px 50px 0px 50px',
    boxShadow: ' rgb(0 0 0 / 40%) 18px 10px 31px',
    Margin: 'auto',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
