import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheVisionRouteComponent } from './the-vision-route.component';

describe('TheVisionRouteComponent', () => {
  let component: TheVisionRouteComponent;
  let fixture: ComponentFixture<TheVisionRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheVisionRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheVisionRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
