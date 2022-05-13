import {Component, OnInit} from '@angular/core';
import {FoodListService} from "../../service/food-list.service";

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(
    private foodListService: FoodListService,
  ) {
  }

  ngOnInit(): void {
  }

  addFood(value: string) {
    this.foodListService.foodListAdd(value).subscribe({
      next: res => {
        this.foodListService.foodListAlert(res);
      },
      error: err => console.log(err)
    });
  }
}
