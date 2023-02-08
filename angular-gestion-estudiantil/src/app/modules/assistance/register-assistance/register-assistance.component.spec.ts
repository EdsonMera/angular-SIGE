import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAssistanceComponent } from './register-assistance.component';

describe('RegisterAssistanceComponent', () => {
  let component: RegisterAssistanceComponent;
  let fixture: ComponentFixture<RegisterAssistanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterAssistanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
