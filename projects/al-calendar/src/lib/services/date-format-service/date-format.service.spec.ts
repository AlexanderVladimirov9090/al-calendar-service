import { formatDate } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { CalendarService } from '../calendar-service/calendar.service';
import { ValidationService } from './../../validation/validation.service';
import { DateFormatService } from './date-format.service';


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

  it('should format MM-DD-YYYY given date', () => {
    const possibleDateByMMDDYY = service.formatedDateString(calendarService.generateDate('2020-02-04T00:00:00'), service.DATE_FORMATS.MMddYYYY);
    const expectedDate = new Date('2020-02-04T00:00:00');
    expect(possibleDateByMMDDYY).toEqual(formatDate(expectedDate, 'MM-dd-yyyy', 'en-US'));
  });

  it('should format MM/DD/YYYY given date', () => {
    service.setDateFormat('/')
    const possibleDateByMMDDYY = service.formatedDateString(calendarService.generateDate('2020-02-04T00:00:00'), service.DATE_FORMATS.MMddYYYY);
    const expectedDate = new Date('2020-02-04T00:00:00');
    expect(possibleDateByMMDDYY).toEqual(formatDate(expectedDate, 'MM/dd/yyyy', 'en-US'));
  });

  it('should format MM&DD&YYYY given date', () => {
    service.setDateFormat('&')
    const possibleDateByMMDDYY = service.formatedDateString(calendarService.generateDate('2020-02-04T00:00:00'), service.DATE_FORMATS.MMddYYYY);
    const expectedDate = new Date('2020-02-04T00:00:00');
    expect(possibleDateByMMDDYY).toEqual(formatDate(expectedDate, 'MM&dd&yyyy', 'en-US'));
  });

});
