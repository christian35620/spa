import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrilloComponent } from './trillo.component';

describe('TrilloComponent', () => {
  let component: TrilloComponent;
  let fixture: ComponentFixture<TrilloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrilloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
