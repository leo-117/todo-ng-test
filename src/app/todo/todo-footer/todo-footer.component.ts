import { Component, OnInit } from '@angular/core';
import { TodoStoreService } from '../_services/todo-store/todo-store.service';
import { TodoItem, TodoItemStatus } from '../_models/todo-item';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  public countTodo: Observable<number>;
  constructor(private storeServ: TodoStoreService<TodoItem>) { }

  ngOnInit() {
    this.countTodo = this.storeServ.onLoadItems().pipe(
      map(this.getCountOfTodoTask.bind(this))
    );
    this.countTodo.subscribe();
  }

  public onClickBtnDltComplete(event: Event) {
    this.storeServ.deleteByPredicate((item: TodoItem) => item.status === 'completed' );
  }

  public onClickLnkFilter(status: TodoItemStatus) {
    this.storeServ.filterByPredicate((item: TodoItem) => item.status === status);
  }

  private getCountOfTodoTask(items: Array<TodoItem>): number {
    let cont = 0;
    items.forEach((item: TodoItem) => {
      if (item.status === 'todo') {
        cont++;
      }
    });
    return cont;
  }

}
