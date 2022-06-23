import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateFilesComponent } from './generate-files.component';

describe('GenerateFilesComponent', () => {
  let component: GenerateFilesComponent;
  let fixture: ComponentFixture<GenerateFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
