import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPageComponent } from './rating-page.component';

describe('RatingPageComponent', () => {
  let component: RatingPageComponent;
  let fixture: ComponentFixture<RatingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingPageComponent]
    });
    fixture = TestBed.createComponent(RatingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
