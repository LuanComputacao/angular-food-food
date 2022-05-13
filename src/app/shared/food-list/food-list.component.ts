import {Component, OnInit} from '@angular/core';
import {FoodListService} from "../../service/food-list.service";
import {Food} from "../../interfaces/food";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<Food> = [];

  constructor(
    private foodListService: FoodListService
  ) {
  }

  ngOnInit(): void {
    this.foodListService.foodlist()
      .subscribe({
        next: data => this.foodList = data,
        error(err) {
          console.log(err)
        }
      })

    this.foodListService.emitEvent.subscribe({
      next: (data: Food) => this.foodList.push(data)
    })
  }

}
