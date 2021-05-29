import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { NuevosProveedores } from '../model/nuevos-proveedores';



@Injectable({
  providedIn: 'root'
})
export class NuevosProveedoresService {

  private dbPath = '/registros';

  registrosRef: AngularFireList<NuevosProveedores>;

  constructor(private db: AngularFireDatabase) { 
    this.registrosRef = db.list(this.dbPath);
  }
  getAll(): AngularFireList<NuevosProveedores> {
    return this.registrosRef;
  }

  create(registro: NuevosProveedores): any {
    return this.registrosRef.push(registro);
  }

  update(key: string, value: any): Promise<void> {
    return this.registrosRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.registrosRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.registrosRef.remove();
  }
}
