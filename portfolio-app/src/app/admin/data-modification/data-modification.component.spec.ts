import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataModificationComponent } from './data-modification.component';

describe('DataModificationComponent', () => {
  let component: DataModificationComponent;
  let fixture: ComponentFixture<DataModificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataModificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
