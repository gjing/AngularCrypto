import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptochartComponent } from './cryptochart.component';

describe('CryptochartComponent', () => {
  let component: CryptochartComponent;
  let fixture: ComponentFixture<CryptochartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CryptochartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CryptochartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
