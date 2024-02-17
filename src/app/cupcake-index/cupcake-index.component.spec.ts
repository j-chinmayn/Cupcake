import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupcakeIndexComponent } from './cupcake-index.component';

describe('CupcakeIndexComponent', () => {
  let component: CupcakeIndexComponent;
  let fixture: ComponentFixture<CupcakeIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CupcakeIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CupcakeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
