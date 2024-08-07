import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalInsuranceComponent } from './legal-insurance.component';

describe('LegalInsuranceComponent', () => {
  let component: LegalInsuranceComponent;
  let fixture: ComponentFixture<LegalInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalInsuranceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});