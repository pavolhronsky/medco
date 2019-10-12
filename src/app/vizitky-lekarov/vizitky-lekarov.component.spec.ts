import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VizitkyLekarovComponent } from './vizitky-lekarov.component';

describe('VizitkyLekarovComponent', () => {
  let component: VizitkyLekarovComponent;
  let fixture: ComponentFixture<VizitkyLekarovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VizitkyLekarovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VizitkyLekarovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
