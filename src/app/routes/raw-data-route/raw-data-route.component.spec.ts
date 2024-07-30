import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RawDataRouteComponent } from './raw-data-route.component';

describe('RawDataRouteComponent', () => {
  let component: RawDataRouteComponent;
  let fixture: ComponentFixture<RawDataRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RawDataRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RawDataRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
