import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../_models/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input()
  public todoItem: TodoItem;

  constructor() { }

  ngOnInit() {
  }

}
