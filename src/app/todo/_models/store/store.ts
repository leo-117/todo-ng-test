import { Observable } from 'rxjs';
import { StoreItem } from './store-item';

export interface Store<ItemType extends StoreItem> {
    insert(newItem: ItemType): void;
    update(updatedItem: ItemType): ItemType;
    delete(id: number): boolean;
    onLoadItems(): Observable<Array<ItemType>>;
    reset(): void;
}
