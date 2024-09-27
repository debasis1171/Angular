import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './student-service.service';
import { Student } from './student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit {
  studentList:Student[]= [];
  constructor(private studentService:StudentServiceService, private router: Router) { }

  ngOnInit() {
    this.showStudentList();
    // this.studentService.getStudentList().subscribe((data:Student[])=>{
    //   this.studentList = data;
    //});
  }
  showStudentList(){
 this.studentService.getStudentList().subscribe((data:Student[])=>{
     this.studentList = data;
    //  console.log(this.studentList);
 });
}
edit(id: number): void {
  this.router.navigate(['/student/edit', id]);
}

delete(id: number): void {
  this.studentService.deleteStudent(id).subscribe(() => {
    this.studentList = this.studentList.filter(student => student.id !== id);
  });
}
}
