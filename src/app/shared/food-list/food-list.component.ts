import {Component, OnInit} from '@angular/core';
import {FoodListService} from "../../service/food-list.service";
import {FoodList} from "../../module/food-list";

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList: Array<FoodList> = [];

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
      next: (data: FoodList) => this.foodList.push(data)
    })
  }

}
