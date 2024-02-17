import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupcakeOrderComponent } from './cupcake-order.component';

describe('CupcakeOrderComponent', () => {
  let component: CupcakeOrderComponent;
  let fixture: ComponentFixture<CupcakeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CupcakeOrderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CupcakeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
