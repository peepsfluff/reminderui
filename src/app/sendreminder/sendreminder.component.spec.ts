import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendreminderComponent } from './sendreminder.component';

describe('SendreminderComponent', () => {
  let component: SendreminderComponent;
  let fixture: ComponentFixture<SendreminderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendreminderComponent]
    });
    fixture = TestBed.createComponent(SendreminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
