import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoggedSleepDataPage } from './logged-sleep-data.page';

describe('LoggedSleepDataPage', () => {
  let component: LoggedSleepDataPage;
  let fixture: ComponentFixture<LoggedSleepDataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoggedSleepDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
