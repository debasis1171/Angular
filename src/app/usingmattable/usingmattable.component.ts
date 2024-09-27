import { Component, OnInit } from '@angular/core';
import { Usingmattable } from './usingmattable';
import { UsingmattableService } from './usingmattable.service';
import { CommonModule } from '@angular/common';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import { Router } from '@angular/router';

@Component({
  selector: 'app-usingmattable',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  templateUrl: './usingmattable.component.html',
  styleUrl: './usingmattable.component.css'
})
export class UsingmattableComponent implements OnInit {
  usingmattableList:Usingmattable[]= [];
  dataSource=new MatTableDataSource<Usingmattable>();
  displayedColumns: string[] = ['id', 'name', 'class','age','rollno','parentdeails','actions'];
  actionButtons = [
    { label: 'Edit', action: 'edit' },
    { label: 'Delete', action: 'delete' }
  ]; // Define your action buttons here
  constructor(private usingmattableService:UsingmattableService, private router: Router) { }


  
  ngOnInit(): void {
  this.showUsingmattableList();
  }

  showUsingmattableList() {
    this.usingmattableService.getusingmattablelist().subscribe((data:Usingmattable[]) => {
      this.usingmattableList = data
      this.dataSource.data = data;
  });
}

edit(id:number): void {
  this.router.navigate(['/student/edit',id]);

  
}

delete(id: number): void {
  this.usingmattableService.deleteStudent(id).subscribe(() => {
    this.dataSource.data = this.dataSource.data.filter(student => student.id !== id);
    this.router.navigate(['/student']); 
  });
}

}
