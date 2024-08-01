import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorEventComponent } from './major-event.component';

describe('MajorEventComponent', () => {
  let component: MajorEventComponent;
  let fixture: ComponentFixture<MajorEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MajorEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MajorEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
