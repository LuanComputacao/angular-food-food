import {EventEmitter, Injectable} from '@angular/core';
import {Food} from "../interfaces/food";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FoodList} from "../module/food-list";

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

  public foodlist(): Observable<Array<FoodList>> {
    return this.http
      .get<Array<FoodList>>(`${this.url}/list-food`)
      .pipe(
        res => res,
        err => err
      )
  }

  public foodListAdd(food: string): Observable<FoodList> {
    return this.http
      .post<FoodList>(
        `${this.url}/list-food`,
        {name: food}
      )
      .pipe(
        res => res,
        err => err
      )
  }

  public foodListAlert(food: FoodList): void {
    return this.emitEvent.emit(food);
  }
}
