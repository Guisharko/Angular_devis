import { Injectable } from '@angular/core';
import { Intervention } from 'src/app/shared/models/intervention';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  public collection: Observable<Intervention[]>;
  private itemsCollection: AngularFirestoreCollection<Intervention>;


  constructor(
    private afs: AngularFirestore
  ) {


    this.itemsCollection = this.afs.collection<Intervention>('interventions');

    this.collection = this.itemsCollection.valueChanges().pipe(
      map((tab) => {
        return tab.map((obj) => {
          return new Intervention(obj);
        });
      })
    );
  }



  public add(item: Intervention): Promise<any> {
    const id = this.afs.createId();
    const intervention = { id, ...item };
    return this.itemsCollection.doc(id).set(intervention)
    .catch((e) => {
      console.log(e);
    });
    // return this.http.post(url, item);
  }

  public  update(id, intervention){
    return this.itemsCollection.doc(id).update(intervention).catch((e) => {
      console.log(e);
    });
  }

  public delete(item: Intervention): Promise<any> {
    return this.itemsCollection.doc(item.id).delete()
    .catch((e) => {
      console.log(e);
    });
    // return this.http.delete(url, item);
  }

  public getIntervention(id: string): Observable<Intervention> {
    return this.itemsCollection.doc<Intervention>(id).valueChanges();
    // return this.http.get(url);
  }
}
