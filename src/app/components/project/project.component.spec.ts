import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should filter project links", ()=> {
    const emptyLink = ""
    const localLink = document.location.href
    const correctLink = "https://developer.mozilla.org/en-US/"

    expect(component.checkProjectLink(emptyLink)).toBe(false)
    expect(component.checkProjectLink(localLink)).toBe(false)
    expect(component.checkProjectLink(correctLink)).toBe(true)
  })
});
