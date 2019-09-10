import { Injectable } from '@angular/core';
import { Store } from '../../_models/store/store';
import { Observable } from 'rxjs';
import { StoreItem } from '../../_models/store/store-item';

@Injectable({
  providedIn: 'root'
})
export abstract class TodoStoreService<ItemType extends StoreItem> implements Store<ItemType> {
  constructor() { }
  public abstract insert(newItem: ItemType): void;
  public abstract update(updatedItem: ItemType): ItemType;
  public abstract delete(id: number): boolean;
  public abstract onLoadItems(): Observable<Array<ItemType>>;
  public abstract reset(): void;
}
