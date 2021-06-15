import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { SolicitudProveedor } from '../model/solicitud-proveedor';

@Injectable({
  providedIn: 'root'
})
export class SolicitudProveedorService {

  private dbPath = '/registros';

  registrosRef: AngularFireList<SolicitudProveedor>;

  constructor(private db: AngularFireDatabase) { 
    this.registrosRef = db.list(this.dbPath);
  }
  getAll(): AngularFireList<SolicitudProveedor> {
    return this.registrosRef;
  }

  create(registro: SolicitudProveedor): any {
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
