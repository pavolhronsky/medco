import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovinkyComponent } from './novinky.component';

describe('NovinkyComponent', () => {
  let component: NovinkyComponent;
  let fixture: ComponentFixture<NovinkyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovinkyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovinkyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
