import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentEditorComponent } from './investment-editor.component';

describe('InvestmentEditorComponent', () => {
  let component: InvestmentEditorComponent;
  let fixture: ComponentFixture<InvestmentEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
