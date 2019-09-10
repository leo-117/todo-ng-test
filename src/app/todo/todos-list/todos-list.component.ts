import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../_models/todo-item';
import { TodoStoreService } from '../_services/todo-store/todo-store.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  public items: Observable<Array<TodoItem>>;

  constructor(
    private storeServ: TodoStoreService<TodoItem>
  ) {
    this.items = this.storeServ.onLoadItems();
  }

  ngOnInit() {
    this.items.subscribe();
  }

}
