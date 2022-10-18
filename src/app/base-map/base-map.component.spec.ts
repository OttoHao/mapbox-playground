import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseMapComponent } from './base-map.component';

describe('BaseMapComponent', () => {
  let component: BaseMapComponent;
  let fixture: ComponentFixture<BaseMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseMapComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
