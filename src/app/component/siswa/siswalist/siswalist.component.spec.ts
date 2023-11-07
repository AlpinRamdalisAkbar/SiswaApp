import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiswalistComponent } from './siswalist.component';

describe('SiswalistComponent', () => {
  let component: SiswalistComponent;
  let fixture: ComponentFixture<SiswalistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiswalistComponent]
    });
    fixture = TestBed.createComponent(SiswalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
