import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(
    private http: HttpClient
  ) { }
  api='https://66ee661d3ed5bb4d0bf0d6a7.mockapi.io/api/v1/student/studentdetails'
  
  getStudentList(){
    return this.http.get<Student []>(this.api);
  }
  getById(id:number){
    return this.http.get<Student>(`${this.api}/${id}`);
  }
  deleteStudent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
