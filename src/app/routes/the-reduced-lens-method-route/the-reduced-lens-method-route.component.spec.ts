import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheReducedLensMethodRouteComponent } from './the-reduced-lens-method-route.component';

describe('TheReducedLensMethodRouteComponent', () => {
  let component: TheReducedLensMethodRouteComponent;
  let fixture: ComponentFixture<TheReducedLensMethodRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TheReducedLensMethodRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TheReducedLensMethodRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
