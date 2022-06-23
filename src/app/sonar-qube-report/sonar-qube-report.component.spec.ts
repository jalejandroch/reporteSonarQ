import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonarQubeReportComponent } from './sonar-qube-report.component';

describe('SonarQubeReportComponent', () => {
  let component: SonarQubeReportComponent;
  let fixture: ComponentFixture<SonarQubeReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonarQubeReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SonarQubeReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
