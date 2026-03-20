import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, docData, Firestore } from '@angular/fire/firestore';
import { Home } from '../models/home.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private collectionName = "metas";

  constructor(private firestore: Firestore) { }

  //Creat new element
  async createItem(data: Home): Promise<void> {
    const itemCollection = collection(this.firestore, this.collectionName);
    await addDoc(itemCollection, data);

  }

  //Get current elements
  getItems(): Observable<any[]> {
    const itemCollection = collection(this.firestore, this.collectionName);
    return collectionData(itemCollection, { idField: "id" })
  }

  //Delete element
  async deleteItems(meta: string): Promise<void> {
    const itemDoc = doc(this.firestore, `${this.collectionName}/${meta}`);
    await deleteDoc(itemDoc);
  }

  // read a single item by ID
  getItemById(meta: string): Observable<any> {
    const itemDoc = doc(this.firestore, `${this.collectionName}/${meta}`);
    return docData(itemDoc, { idField: 'id' });
  }

}
