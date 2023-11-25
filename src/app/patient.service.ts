import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  constructor(private http: HttpClient) {}

  getAllPatients(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/patients');
  }

  getPatient(name: string): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/patients/' + name);
  }

  addPatients(patient: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/patients/', patient);
  }

  updatePatient(patient: any): Observable<void> {
    return this.http.put<void>(
      'http://localhost:8000/api/cats/' + patient.name,
      patient
    );
  }

  deletePatient(id: number) {
    return this.http.delete('http://localhost:3000/api/patients/' + id);
  }
}
