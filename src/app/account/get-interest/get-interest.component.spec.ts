import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInterestComponent } from './get-interest.component';

describe('GetInterestComponent', () => {
  let component: GetInterestComponent;
  let fixture: ComponentFixture<GetInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetInterestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
