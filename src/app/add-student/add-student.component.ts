import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';


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
    MatRadioModule, // Add MatRadioModule to imports
    MatDatepickerModule, // Add MatDatepickerModule to imports
    MatCheckboxModule
  ],
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  studentForm!: FormGroup; // Use the non-null assertion
  api = 'https://66ee661d3ed5bb4d0bf0d6a7.mockapi.io/api/v1/student/studentdetails';
  studentId!: number;
  constructor(private fb: FormBuilder, private http: HttpClient,private route: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {

    this.studentId = this.route.snapshot.params['id'];
    this.studentForm = this.fb.group({
      name: [''],
      class: [''],
      age: [''],
      rollNo: [''],

      parentDetails: [''] // Corrected from 'ParentDeatils' to 'parentDetails'
    });
    if (this.studentId){
    this.getStudentById(this.studentId);
    }
  }
getStudentById(id:number): void {  
  this.http.get(this.api + '/' + id).subscribe((response: any) => {
    this.studentForm.patchValue(response);
  });
}
onSubmit(): void {
  if (this.studentForm.valid) {
    if (this.studentId) {
      // Update existing student
      this.http.put(this.api + '/' + this.studentId, this.studentForm.value).subscribe(response => {
        console.log('Student updated successfully', response);
        // Optionally, you can reset the form or navigate away
        this.studentForm.reset();
        this.router.navigate(['/student']);
      }, error => {
        console.error('Error updating student', error);
      });
    } else {
      // Add new student
      this.http.post(this.api, this.studentForm.value).subscribe(response => {
        console.log('Student added successfully', response);
        // Optionally, you can reset the form or update the table here
        this.studentForm.reset();
        this.router.navigate(['/student']);
      }, error => {
        console.error('Error adding student', error);
      });
    }
  }
}
}

