import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoenvioComponent } from './nuevoenvio.component';

describe('NuevoenvioComponent', () => {
  let component: NuevoenvioComponent;
  let fixture: ComponentFixture<NuevoenvioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoenvioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoenvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
