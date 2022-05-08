import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeFilesComponent } from './large-files.component';

describe('LargeFilesComponent', () => {
  let component: LargeFilesComponent;
  let fixture: ComponentFixture<LargeFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
