import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggedSleepinessDataPage } from './logged-sleepiness-data.page';

describe('LoggedSleepinessDataPage', () => {
  let component: LoggedSleepinessDataPage;
  let fixture: ComponentFixture<LoggedSleepinessDataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoggedSleepinessDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
