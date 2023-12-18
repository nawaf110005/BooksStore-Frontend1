import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCatagoryComponent } from './book-catagory.component';

describe('BookCatagoryComponent', () => {
  let component: BookCatagoryComponent;
  let fixture: ComponentFixture<BookCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCatagoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
