import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-two',
  templateUrl: './template-two.component.html',
  styleUrls: ['./template-two.component.css']
})
export class TemplateTwoComponent implements OnInit {

  cardStyleFront = {
    color:'yellowgreen',
    backgroundColor: '',
    background:'linear-gradient(black, #5e7080)',
    fontStyle: '',
    fontFamily: 'auto',
    width: '29%',
    height: '13rem',
    borderRadius: '4px',
    boxShadow: ' rgb(0 0 0 / 40%) 1px 10px 31px',
    Margin: 'auto',
  };
  cardStyle = {
    color:'yellowgreen',
    backgroundColor: '',
    background:'linear-gradient(black, #5e7080)',
    fontStyle: '',
    fontFamily: 'auto',
    width: '29%',
    height: '13rem',
    borderRadius: '4px',
    boxShadow: ' rgb(0 0 0 / 40%) 1px 10px 31px',
    Margin: 'auto',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
