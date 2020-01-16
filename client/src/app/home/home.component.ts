import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {Business} from '../../../../Model/User'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  test ="tttt";
  bb  = new Business();
  constructor() {
    let a : Business = new Business()
    a.businessName = "qweq";
    this.bb.businessName = "qweqew";


  }

  ngOnInit() {
    console.log(this.bb)
  }
}
