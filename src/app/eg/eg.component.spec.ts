import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgComponent } from './eg.component';

describe('EgComponent', () => {
  let component: EgComponent;
  let fixture: ComponentFixture<EgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
