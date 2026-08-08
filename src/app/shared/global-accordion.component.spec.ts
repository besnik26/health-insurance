import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalAccordionComponent } from './global-accordion.component';

describe('GlobalAccordionComponent', () => {
  let component: GlobalAccordionComponent;
  let fixture: ComponentFixture<GlobalAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalAccordionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlobalAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
