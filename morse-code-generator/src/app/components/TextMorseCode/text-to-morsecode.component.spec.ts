import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToMorsecodeComponent } from './text-to-morsecode.component';

describe('TextToMorseCodeComponent', () => {
  let component: TextToMorsecodeComponent;
  let fixture: ComponentFixture<TextToMorsecodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextToMorsecodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToMorsecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
