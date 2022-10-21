import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../services/getdata.service';

@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {

  weather:any[]=[];

  constructor(private getData: GetdataService) { }

  ngOnInit(): void {
    this.getweather();
  }

  getweather(){
    this.getData.getweather().subscribe({
      next: resp => {
        this.weather = resp.data;
        console.log("info traida del servicio",this.weather);
        
      }
    })
  }

}
