import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverPagesComponent } from './cover-pages.component';

describe('CoverPagesComponent', () => {
  let component: CoverPagesComponent;
  let fixture: ComponentFixture<CoverPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
