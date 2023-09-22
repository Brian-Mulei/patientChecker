import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FileUploaderPage } from './file-uploader.page';

describe('FileUploaderPage', () => {
  let component: FileUploaderPage;
  let fixture: ComponentFixture<FileUploaderPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FileUploaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
