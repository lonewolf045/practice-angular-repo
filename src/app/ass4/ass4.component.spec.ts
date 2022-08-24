import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass4Component } from './ass4.component';

describe('Ass4Component', () => {
  let component: Ass4Component;
  let fixture: ComponentFixture<Ass4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ass4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ass4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
