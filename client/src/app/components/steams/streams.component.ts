import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../services/token.service';

@Component({
  selector: 'app-steams',
  templateUrl: './steams.component.html',
  styleUrls: ['./steams.component.scss']
})
export class StreamsComponent implements OnInit {

  token: any;
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.token = this.tokenService.getToken();
    console.log(this.token);
  }

}
