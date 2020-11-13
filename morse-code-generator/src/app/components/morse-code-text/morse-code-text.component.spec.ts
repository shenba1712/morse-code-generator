import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorseCodeTextComponent } from './morse-code-text.component';

describe('MorseCodeTextComponent', () => {
  let component: MorseCodeTextComponent;
  let fixture: ComponentFixture<MorseCodeTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorseCodeTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorseCodeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
