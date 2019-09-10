import { Injectable } from '@angular/core';
import { TodoItem } from '../../../../_models/todo-item';
import { Subject, Observable } from 'rxjs';
import { cloneDeep } from 'lodash';
import { Store } from 'src/app/todo/_models/store/store';

@Injectable({
  providedIn: 'root'
})
export class MyStoreService implements Store<TodoItem> {

  private items: Array<TodoItem>;
  private sbtItems: Subject<Array<TodoItem>>;
  constructor() {
    this.sbtItems = new Subject();
    this.items = [];
  }

  public insert(newTodoItem: TodoItem): void {
    this.items.push(newTodoItem);
    this.sbtItems.next(cloneDeep(this.items));
  }

  public update(updatedItem: TodoItem): TodoItem {
    return updatedItem;
  }

  public delete(id: number): boolean {
    return false;
  }

  public reset(): void {
    
  }

  public onLoadItems(): Observable<Array<TodoItem>> {
    return this.sbtItems.asObservable();
  }

}
