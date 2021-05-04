import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingItemEditComponent } from './saving-item-edit.component';

describe('SavingItemEditComponent', () => {
  let component: SavingItemEditComponent;
  let fixture: ComponentFixture<SavingItemEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingItemEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
