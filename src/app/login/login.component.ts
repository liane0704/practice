import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../_services/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public configSvc: ConfigService   //呼叫進來的變數; ()裡面放變數 {}裡面放要執行的東西
  ) { }

  ngOnInit(): void {
    this.configSvc.run(); //呼叫這裡的services且執行他
  }

}
