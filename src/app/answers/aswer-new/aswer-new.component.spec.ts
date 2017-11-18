import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AswerNewComponent } from './aswer-new.component';

describe('AswerNewComponent', () => {
  let component: AswerNewComponent;
  let fixture: ComponentFixture<AswerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AswerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AswerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
