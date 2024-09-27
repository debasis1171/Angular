import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudent1Component } from './add-student1.component';

describe('AddStudent1Component', () => {
  let component: AddStudent1Component;
  let fixture: ComponentFixture<AddStudent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStudent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddStudent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
