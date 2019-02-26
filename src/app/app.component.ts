import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  constructor(private http: HttpClient) {
	}
  
  ngOnInit() {
    let url = '/opendata/datalist/apiAccess?scope=resourceAquire&rid=0b544701-fb47-4fa9-90f1-15b1987da0f5';
    this.data = this.http.get(url).pipe(map(data => {
      return data;
    }));
  }
}
