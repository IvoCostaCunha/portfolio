import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageContainerComponent } from './language-container.component';

describe('LanguageContainerComponent', () => {
  let component: LanguageContainerComponent;
  let fixture: ComponentFixture<LanguageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
