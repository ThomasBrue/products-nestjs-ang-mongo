import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSingleProductComponent } from './delete-single-product.component';

describe('DeleteSingleProductComponent', () => {
  let component: DeleteSingleProductComponent;
  let fixture: ComponentFixture<DeleteSingleProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteSingleProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteSingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
