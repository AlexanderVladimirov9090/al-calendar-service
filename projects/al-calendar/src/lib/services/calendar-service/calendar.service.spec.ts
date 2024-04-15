import { TestBed } from '@angular/core/testing';
import InvalidDateExpressionError from '../../errors/invalid-expression-error';

import { CalendarService } from './calendar.service';

describe('CalendarService', () => {
  let service: CalendarService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create date from string "YYYY-MM-DDThh:mm:ss" format', () => {
    const possibleDate = service.generateDate('2020-02-04T00:00:00');
    const expectedDate = new Date('2020-02-04T00:00:00');
    expect(possibleDate.toDateString()).toEqual(expectedDate.toDateString());
  });

  it('should create date from string "MonthName Day, YYYY hh:mm:ss" format', () => {
    const possibleDate = service.generateDate('December 17, 2020 03:24:00');
    const expectedDate = new Date('December 17, 2020 03:24:00');
    expect(possibleDate.toDateString()).toEqual(expectedDate.toDateString());
  });

  it('should create date from number year,month,day format', () => {
    const possibleDate = service.generateDate(2020, 1, 11);
    const expectedDate = new Date(2020, 1, 11, 0, 0, 0, 0);
    expect(possibleDate.toDateString()).toEqual(expectedDate.toDateString());
  });

  it('should create date from number year,month,day,hours format', () => {
    const possibleDate = service.generateDate(2020, 1, 11, 12);
    const expectedDate = new Date(2020, 1, 11, 12, 0, 0, 0);
    expect(possibleDate).toEqual(expectedDate);
  });

  it('should create date from number year,month,day,hours,minutes format', () => {
    const possibleDate = service.generateDate(2020, 1, 11, 12, 60);
    const expectedDate = new Date(2020, 1, 11, 12, 60, 0, 0);
    expect(possibleDate).toEqual(expectedDate);
  });

  it('should create date from number year,month,day,hours,minutes,seconds format', () => {
    const possibleDate = service.generateDate(2020, 1, 11, 12, 60, 60);
    const expectedDate = new Date(2020, 1, 11, 12, 60, 60, 0);
    expect(possibleDate).toEqual(expectedDate);
  });

  it('should create date from number year,month,day,hours,minutes,seconds,milliseconds format', () => {
    const possibleDate = service.generateDate(2020, 1, 11, 12, 60, 60, 1);
    const expectedDate = new Date(2020, 1, 11, 12, 60, 60, 1);
    expect(possibleDate).toEqual(expectedDate);
  });

  it('should THROW error date', () => {
    expect(function () { service.generateDate(null); }).toThrow(new InvalidDateExpressionError('Undefined value of expression!'));
  });

  it('should get date NOW', () => {
    const possibleDateNow = service.getNow();
    const expectedDateNow = new Date();
    expect(possibleDateNow.toDateString()).toEqual(expectedDateNow.toDateString());
  });

  it('should get Tomorrow as date', () => {
    const possibleTomorrow = service.getOffsetDate(1);
    const expectedTomorrow = new Date();
    expectedTomorrow.setDate(new Date().getDate() + 1);
    expect(possibleTomorrow.toDateString()).toEqual(expectedTomorrow.toDateString());
  });

  it('should get Previouse day as date', () => {
    const possibleTomorrow = service.getOffsetDate(-1);
    const expectedTomorrow = new Date();
    expectedTomorrow.setDate(new Date().getDate() - 1);
    expect(possibleTomorrow.toDateString()).toEqual(expectedTomorrow.toDateString());
  });

  it('should get Previouse day as date', () => {
    const possibleTomorrow = service.getOffsetDate(-1, new Date(2023, 9, 16));
    const expectedTomorrow = new Date(2023, 9, 15);
    expect(possibleTomorrow.toDateString()).toEqual(expectedTomorrow.toDateString());
  });


  it('should get the first date of the year', () => {
    const possibleFirstDate = service.getFirstDateOfYear(2022);
    const expectedFirstDate = new Date(2022, 0, 1);
    expect(possibleFirstDate.toDateString()).toEqual(expectedFirstDate.toDateString());
  });

  it('should get the last date of the year', () => {
    const possibleLastDate = service.getLastDateOfYear(2022);
    const expectedLastDate = new Date(2022, 11, 31);
    expect(possibleLastDate.toDateString()).toEqual(expectedLastDate.toDateString());
  });

  it('should strip UTC from the date', () => {
    const possibleStrippedDate = service.stripUTC('2016-01-01T00:00:00Z');
    const expectedStrippedDate = '2016-01-01T00:00:00';
    expect(possibleStrippedDate).toEqual(expectedStrippedDate);
  });
});