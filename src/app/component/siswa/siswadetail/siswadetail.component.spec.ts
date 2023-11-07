import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiswadetailComponent } from './siswadetail.component';

describe('SiswadetailComponent', () => {
  let component: SiswadetailComponent;
  let fixture: ComponentFixture<SiswadetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiswadetailComponent]
    });
    fixture = TestBed.createComponent(SiswadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
