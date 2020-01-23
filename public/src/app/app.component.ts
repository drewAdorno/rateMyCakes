import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { NgForm } from '@angular/forms';
// tslint:disable: variable-name one-line no-string-literal whitespace

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cake: any;
  cakes: [];

  constructor(private _httpService: HttpService){}
  ngOnInit()
  {
    this.cake = {cakeName: '', bakerName: '', url: ''};
    this.allCakes();
  }

  allCakes()
  {
    const observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log(data);

      this.cakes = data['cakes'];
    });

  }

  onSubmit()
  {
    const observable = this._httpService.postCakes(this.cake);
    observable.subscribe(data => console.log(data));
    this.cake = {cakeName: '', bakerName: '', url: ''};
  }
}
