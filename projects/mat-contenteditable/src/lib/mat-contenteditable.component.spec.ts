import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatContenteditableComponent } from './mat-contenteditable.component';

describe('MatContenteditableComponent', () => {
  let component: MatContenteditableComponent;
  let fixture: ComponentFixture<MatContenteditableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatContenteditableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatContenteditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
