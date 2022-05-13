import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Food} from "../interfaces/food";

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private url: string = "http://localhost:3000"
  public emitEvent = new EventEmitter();

  constructor(
    private http: HttpClient
  ) {
  }

  public foodlist(): Observable<Array<Food>> {
    return this.http
      .get<Array<Food>>(`${this.url}/list-food`)
      .pipe(
        res => res,
        err => err
      )
  }

  public foodListAdd(food: string): Observable<Food> {
    return this.http
      .post<Food>(
        `${this.url}/list-food`,
        {name: food}
      )
      .pipe(
        res => res,
        err => err
      )
  }

  public foodListAlert(food: Food): void {
    return this.emitEvent.emit(food);
  }
}
