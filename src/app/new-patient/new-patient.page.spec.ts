import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPatientPage } from './new-patient.page';

describe('NewPatientPage', () => {
  let component: NewPatientPage;
  let fixture: ComponentFixture<NewPatientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewPatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
