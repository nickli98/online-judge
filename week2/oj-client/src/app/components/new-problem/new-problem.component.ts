import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {

  public difficulties = ["Easy", "Medium", "Hard", "Super"];

  constructor() { }

  ngOnInit() {
  }

}
