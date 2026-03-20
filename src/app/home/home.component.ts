import { Component, inject } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  private homeService = inject(HomeService);

  goalText: string = '';
  goals: any[] = [];

  constructor() {
    this.homeService.getItems().subscribe(
      data => {
        this.goals = data;
      }
    )
  }

  addGoal() {
    if (this.goalText.trim() !== '') {

      const newGoal = this.goalText;
      this.homeService.createItem({
        meta: newGoal
      });

      this.goalText = '';
    }
  }

  deleteGoal(goal: any) {
    this.homeService.deleteItems(goal.id);
  }
}
