import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCardTemplateComponent } from './business-card-template.component';

describe('BusinessCardTemplateComponent', () => {
  let component: BusinessCardTemplateComponent;
  let fixture: ComponentFixture<BusinessCardTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCardTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
