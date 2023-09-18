import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoComponent } from './despesa.component';

describe('DashboardComponent', () => {
  let component: BancoComponent;
  let fixture: ComponentFixture<BancoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BancoComponent]
    });
    fixture = TestBed.createComponent(BancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
