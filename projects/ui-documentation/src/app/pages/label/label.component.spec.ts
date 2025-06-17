import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLabelComponent } from './label.component';

describe('ViewLabelComponent', () => {
  let component: ViewLabelComponent;
  let fixture: ComponentFixture<ViewLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
