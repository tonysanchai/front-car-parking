import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarParkDetail} from "./car-park-detail";

@Injectable({
  providedIn: 'root'
})
export class CarParkingServiceService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/api/';
  }

  public findAll(): Observable<CarParkDetail[]> {
    return this.http.get<CarParkDetail[]>(this.url+"getCar");
  }

  // public save(user: User) {
  //   return this.http.post<User>(this.usersUrl, user);
  // }
}
