import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksCatagoryComponent } from './books-catagory.component';

describe('BooksCatagoryComponent', () => {
  let component: BooksCatagoryComponent;
  let fixture: ComponentFixture<BooksCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksCatagoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
