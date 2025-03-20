import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChEBComponent } from './why-ch-eb.component';

describe('WhyChEBComponent', () => {
  let component: WhyChEBComponent;
  let fixture: ComponentFixture<WhyChEBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyChEBComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyChEBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
