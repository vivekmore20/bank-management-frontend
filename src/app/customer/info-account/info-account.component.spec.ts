import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAccountComponent } from './info-account.component';

describe('InfoAccountComponent', () => {
  let component: InfoAccountComponent;
  let fixture: ComponentFixture<InfoAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
