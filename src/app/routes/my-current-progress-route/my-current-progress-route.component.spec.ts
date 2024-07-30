import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCurrentProgressRouteComponent } from './my-current-progress-route.component';

describe('MyCurrentProgressRouteComponent', () => {
  let component: MyCurrentProgressRouteComponent;
  let fixture: ComponentFixture<MyCurrentProgressRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCurrentProgressRouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyCurrentProgressRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
