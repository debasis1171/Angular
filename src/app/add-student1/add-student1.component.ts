import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatOption } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { ActivatedRoute, Router } from '@angular/router';
export class Student{
  id!: number;
  age!: number;
  name!: string;
  gender!: string; 
  rollno!: number;
  dateofbirth!: Date; 
  agree!: boolean; 
}

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    CommonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatOption,
    MatSliderModule,
    FormsModule,MatCardModule
  ],
  templateUrl: './add-student1.component.html',
  styleUrl: './add-student1.component.css' 
})
export class AddStudentComponent1 implements OnInit {
 
  api = 'https://66ee661d3ed5bb4d0bf0d6a7.mockapi.io/api/v1/student/studentdetail';
  studentId!: number;
  student= new Student();
  constructor(private fb: FormBuilder, private http: HttpClient,private route: ActivatedRoute,private router:Router) {}
   
  ngOnInit(): void {
  
    this.studentId = this.route.snapshot.params['id'];
    if (this.studentId){
    this.getStudentById(this.studentId);
    }
  }

getStudentById(id:number): void {  
  this.http.get(this.api + '/' + id).subscribe((response: any) => {
    this.student = response;
    console.log('Student fetched successfully', response);
  });
}
onSubmit(): void {
      // Add new student
      this.http.post(this.api, this.student).subscribe(response => {
        console.log('Student added successfully', response);
        // Optionally, you can reset the form or update the table here
        this.router.navigate(['/student']);
      }, error => {
        console.error('Error adding student', error);
      });
    }
  }
