import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicsColorsComponent } from './basics-colors.component';

describe('BasicsColorsComponent', () => {
  let component: BasicsColorsComponent;
  let fixture: ComponentFixture<BasicsColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicsColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicsColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
