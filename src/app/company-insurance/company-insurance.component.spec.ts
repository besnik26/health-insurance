import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInsuranceComponent } from './company-insurance.component';

describe('CompanyInsuranceComponent', () => {
  let component: CompanyInsuranceComponent;
  let fixture: ComponentFixture<CompanyInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompanyInsuranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanyInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
