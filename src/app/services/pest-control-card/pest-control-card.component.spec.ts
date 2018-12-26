import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestControlCardComponent } from './pest-control-card.component';

describe('PestControlCardComponent', () => {
  let component: PestControlCardComponent;
  let fixture: ComponentFixture<PestControlCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestControlCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestControlCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
