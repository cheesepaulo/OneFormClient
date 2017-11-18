import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AswerListComponent } from './aswer-list.component';

describe('AswerListComponent', () => {
  let component: AswerListComponent;
  let fixture: ComponentFixture<AswerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AswerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AswerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
