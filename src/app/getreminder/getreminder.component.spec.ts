import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetreminderComponent } from './getreminder.component';

describe('GetreminderComponent', () => {
  let component: GetreminderComponent;
  let fixture: ComponentFixture<GetreminderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetreminderComponent]
    });
    fixture = TestBed.createComponent(GetreminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
