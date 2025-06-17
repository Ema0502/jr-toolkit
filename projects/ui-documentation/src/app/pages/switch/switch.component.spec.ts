import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSwitchComponent } from './switch.component';

describe('ViewSwitchComponent', () => {
  let component: ViewSwitchComponent;
  let fixture: ComponentFixture<ViewSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
