import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubPatientPage } from './sub-patient.page';

describe('SubPatientPage', () => {
  let component: SubPatientPage;
  let fixture: ComponentFixture<SubPatientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SubPatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
