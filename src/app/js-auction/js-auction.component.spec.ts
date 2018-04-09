import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsAuctionComponent } from './js-auction.component';

describe('JsAuctionComponent', () => {
  let component: JsAuctionComponent;
  let fixture: ComponentFixture<JsAuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsAuctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsAuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
