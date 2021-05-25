import { ValidationService } from './../../validation/validation.service';
import { TestBed } from '@angular/core/testing';
import { CalendarService } from '../calendar-service/calendar.service';

import { DateFormatService } from './date-format.service';
import { EmptyDateError } from '../../errors/empty-date-error';

describe('DateFormatService', () => {
  let service: DateFormatService;
  let calendarService = new CalendarService(new ValidationService());

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should format MM DD YYYY the date', () => {
    const possibleDateByMMDDYY = service.formatMMDDYYYY(calendarService.generateDate('2020-02-04T00:00:00'));
    const exactDateByMMDDYY = new Date('2020-02-04T00:00:00');
    expect(possibleDateByMMDDYY).toEqual(`${exactDateByMMDDYY.getMonth()}/${exactDateByMMDDYY.getDate()}/${exactDateByMMDDYY.getFullYear()}`);
  });

  it('should THROW error WHEN MM DD YYYY the date', () => {
    expect(function () { service.formatMMDDYYYY(undefined); }).toThrow(new EmptyDateError('No date is given to format'));
  });

  xit('should get date NOW', () => {
    const possibleDateNow = calendarService.getNow();
    const exactDateNow = new Date();
    expect(possibleDateNow.toDateString()).toEqual(exactDateNow.toDateString());
  });

  xit('should format MM_DD_YYYY_Time the date', () => {
    const dateNow = calendarService.getNow();
    const possibleDateByMMDDYYTime = service.formatMM_DD_YYYY_Time(dateNow);
    expect(possibleDateByMMDDYYTime).toEqual(`${dateNow.getMonth()}_${dateNow.getDate()}_${dateNow.getFullYear()}_${dateNow.getHours()}${dateNow.getMinutes()}`);
  });
});
