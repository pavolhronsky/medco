import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulancieComponent } from './ambulancie.component';

describe('AmbulancieComponent', () => {
  let component: AmbulancieComponent;
  let fixture: ComponentFixture<AmbulancieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulancieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulancieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
