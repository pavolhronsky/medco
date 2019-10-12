import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OSpolocnostiComponent } from './o-spolocnosti.component';

describe('OSpolocnostiComponent', () => {
  let component: OSpolocnostiComponent;
  let fixture: ComponentFixture<OSpolocnostiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OSpolocnostiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OSpolocnostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
