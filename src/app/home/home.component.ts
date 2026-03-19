import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  goalText: string = '';
  goals: string[] = ['be hacker', 'go to everest'];

  addGoal() {
    if (this.goalText.trim() !== '') {
      this.goals.push(this.goalText);
      this.goalText = '';
    }
  }

  deleteGoal(index: number) {
    this.goals.splice(index, 1);
  }
}
