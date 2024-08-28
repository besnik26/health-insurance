import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceContentComponent } from './insurance-content.component';

describe('InsuranceContentComponent', () => {
  let component: InsuranceContentComponent;
  let fixture: ComponentFixture<InsuranceContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsuranceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
