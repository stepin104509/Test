import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { count } from 'console';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have increment', () =>{
    let cmp = new CartComponent();
    cmp.increments();
    expect(cmp.currentNumber).toBe(1);
  })
});
