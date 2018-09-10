import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaritemComponent } from './agregaritem.component';

describe('AgregaritemComponent', () => {
  let component: AgregaritemComponent;
  let fixture: ComponentFixture<AgregaritemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaritemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaritemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
