import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../_services/todo-store/todo-store.service';
import { TodoItem } from '../_models/todo-item';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  public txtValue = '';

  constructor(
    private storeServ: TodoStoreService<TodoItem>
  ) { }

  ngOnInit() {
  }

  public onKeyUp(event: KeyboardEvent) {
    if (event.code !== 'Enter') {
      return;
    }

    if (!this.txtValue) {
      return;
    }

    this.storeServ.insert(
      {
        id: this.generateId(),
        text: this.txtValue
      }
    );
    this.txtValue = '';
  }

  private generateId(): string {
    return (Math.random() * (5000 - 1) + 1).toString();
  }

}
