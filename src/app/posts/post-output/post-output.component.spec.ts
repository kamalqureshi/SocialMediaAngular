import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostOutputComponent } from './post-output.component';

describe('PostOutputComponent', () => {
  let component: PostOutputComponent;
  let fixture: ComponentFixture<PostOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
