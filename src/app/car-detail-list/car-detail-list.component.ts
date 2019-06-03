import {Component, OnInit} from '@angular/core';
import {CarParkDetail} from "../car-park-detail";
import {CarParkingServiceService} from "../car-parking-service.service";

@Component({
  selector: 'app-car-detail-list',
  templateUrl: './car-detail-list.component.html',
  styleUrls: ['./car-detail-list.component.css']
})
export class CarDetailListComponent implements OnInit {

  carParkDetails: CarParkDetail[];

  constructor(private carParkingServiceService: CarParkingServiceService) {
  }

  ngOnInit() {
    this.carParkingServiceService.findAll().subscribe(data => {
      this.carParkDetails = data;
    });
    // this.carParkingServiceService.getCarParking('1').subscribe(data => {
    //   console.log(data);
    // });
  }

  getCarParkingByFloor(floor : any) {
    this.carParkingServiceService.getCarParkingByFloor(floor).subscribe(data => {
     alert("Floor : "+data[0].floor+"\nParking : "+ data[0].quantity+"\nRemain Park : "+ data[0].remain);
    });

  }

}
