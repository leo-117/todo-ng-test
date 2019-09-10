import { Observable } from 'rxjs';
import { StoreItem } from './store-item';

export interface Store<ItemType extends StoreItem> {
    insert(newItem: ItemType): void;
    update(updatedItem: ItemType): ItemType;
    delete(id: string): boolean;
    onLoadItems(): Observable<Array<ItemType>>;
    reset(): void;
    deleteByPredicate(pedicate: (item: ItemType) => boolean): void;
    filterByPredicate(pedicate: (item: ItemType) => boolean): void;
}
