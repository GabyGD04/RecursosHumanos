import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelprofesionalComponent } from './nivelprofesional.component';

describe('NivelprofesionalComponent', () => {
  let component: NivelprofesionalComponent;
  let fixture: ComponentFixture<NivelprofesionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelprofesionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NivelprofesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
