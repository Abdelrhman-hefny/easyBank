import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastesComponent } from './lastes.component';

describe('LastesComponent', () => {
  let component: LastesComponent;
  let fixture: ComponentFixture<LastesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LastesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
