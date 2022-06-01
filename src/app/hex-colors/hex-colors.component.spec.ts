import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexColorsComponent } from './hex-colors.component';

describe('HexColorsComponent', () => {
  let component: HexColorsComponent;
  let fixture: ComponentFixture<HexColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HexColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HexColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
