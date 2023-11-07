import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { siswa } from '../models/siswa.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SiswaService {

  baseUrl: string = environment.apiUrl;
  
  constructor(private http : HttpClient) { }

  getAllData(): Observable<siswa[]>{
    return this.http.get<siswa[]>(this.baseUrl + "/api/siswa");
  }

  getData(id: any): Observable<siswa>{
    return this.http.get<siswa>(this.baseUrl + `/api/siswa/${id}`);
  }

  addSiswa(model: siswa): Observable<siswa>{
    model.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<siswa>(this.baseUrl + "/api/siswa", model);
  }

  updateSiswa(model: siswa): Observable<siswa>{
    return this.http.put<siswa>(this.baseUrl + `/api/siswa/${model.id}`, model);
  }

  deleteData(id: any): Observable<void> {
    return this.http.delete<void>(this.baseUrl + `/api/siswa/${id}`)
  }
}
