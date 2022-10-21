import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http: HttpClient) { }

  getweather(){
    return this.http.get('https://api.weatherbit.io/v2.0/current?lat=19.299630&lon=-99.076449&key=a8e8c1bbb30244d187a0f6aa8d79f2fb').pipe(
      map( (response:any) => {
        console.log(response);
        return response
      })
    )
  }

}
