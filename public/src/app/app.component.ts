import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cake: any;
  constructor(private _httpService: HttpService){}
  ngOnInit()
  {
    this.cake = {cakeName: '', bakerName: '', url: ''};
  }
  onSubmit()
  {
    let observable=this._httpService.postCakes(this.cake);
    observable.subscribe(data => console.log(data));
    this.cake = {cakeName: '', bakerName: '', url: ''};
  }
}
