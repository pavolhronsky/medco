import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UvodComponent } from './uvod.component';

describe('UvodComponent', () => {
  let component: UvodComponent;
  let fixture: ComponentFixture<UvodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UvodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UvodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
