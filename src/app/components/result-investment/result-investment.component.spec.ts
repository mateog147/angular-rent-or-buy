import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultInvestmentComponent } from './result-investment.component';

describe('ResultInvestmentComponent', () => {
  let component: ResultInvestmentComponent;
  let fixture: ComponentFixture<ResultInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultInvestmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
