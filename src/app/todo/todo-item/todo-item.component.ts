import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../_models/todo-item';
import { TodoStoreService } from '../_services/todo-store/todo-store.service';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  private internalItem: TodoItem;
  @Input()
  public set todoItem(todoItem: TodoItem) {
    this.internalItem = cloneDeep(todoItem);
    if (this.internalItem) {
      this.isChecked = this.internalItem.status === 'completed' ? true :  false;
    }
  }
  public get todoItem() {
    return this.internalItem;
  }

  public isChecked = false;
  public isEditing = false;

  constructor(
    private storeServ: TodoStoreService<TodoItem>
  ) { }

  ngOnInit() {
  }

  public onClickbtnDelete(event: Event, id: string) {
    if (id === '') {
      return;
    }
    this.storeServ.delete(id);
  }

  public onChangeChBox(event: Event) {
    if ((event.target as any).checked) {
      this.todoItem.status = 'completed';
    } else {
      this.todoItem.status = 'todo';
    }
    this.storeServ.update(this.todoItem);
  }

  public onDblClickLbl(event: Event) {
    this.isEditing = true;
  }

  public onKeyUptxtEdit(event: KeyboardEvent) {
    if (event.code === 'Escape') {
      this.isEditing = false;
      return;
    }

    if (event.code !== 'Enter') {
      return;
    }

    if (!this.todoItem.text) {
      return;
    }

    this.storeServ.update(this.todoItem);
    this.isEditing = false;
  }

}
