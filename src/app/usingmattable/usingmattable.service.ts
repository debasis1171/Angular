import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usingmattable } from './usingmattable';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsingmattableService {
  [x: string]: any;

  constructor(
    private http: HttpClient,private router:Router
  ) { }
  private api = 'https://66ee661d3ed5bb4d0bf0d6a7.mockapi.io/api/v1/student/studentdetails';

  getusingmattablelist() {
    return this.http.get<Usingmattable[]>(this.api);
  }
  getById(id: number) {
    return this.http.get<Usingmattable>(`${this.api}/${id}`);
  }

  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }

}
