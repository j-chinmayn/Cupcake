import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupcakeConfirmComponent } from './cupcake-confirm.component';

describe('CupcakeConfirmComponent', () => {
  let component: CupcakeConfirmComponent;
  let fixture: ComponentFixture<CupcakeConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CupcakeConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CupcakeConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
