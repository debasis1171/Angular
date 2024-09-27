import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingmattableComponent } from './usingmattable.component';

describe('UsingmattableComponent', () => {
  let component: UsingmattableComponent;
  let fixture: ComponentFixture<UsingmattableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingmattableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingmattableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
