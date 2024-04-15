import { TestBed } from '@angular/core/testing';
import InvalidDateExpressionError from '../errors/invalid-expression-error';

import { ValidationService } from './validation.service';

describe('ValidationService', () => {
  let service: ValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate date expression from string', () => {
    expect(service.validateDateExpression(['December 17, 1995 03:24:00'])).toBeTrue();
  });

  it('should throw invalid date expression when empty array is passed', () => {
    expect(() => { service.validateDateExpression([]); }).toThrow(new InvalidDateExpressionError("Undefined value of expression!"));
  });

  it('should throw invalid date expression when empty string is passed', () => {
    expect(() => { service.validateDateExpression(['']); }).toThrow(new InvalidDateExpressionError("Undefined value of expression!"));
  });

  it('should throw invalid date if MONTH is undefined', () => {
    expect(() => { service.validateDateExpression([2000]); }).toThrow(new InvalidDateExpressionError("Undefined value of MONTH not allowed!"));
  });

  it('should throw invalid date if MONTH is negative', () => {
    expect(() => { service.validateDateExpression([2000, -1]); }).toThrow(new InvalidDateExpressionError("No Negative MONTH is allowed!"));
  });

  it('should throw invalid date if MONTH exceeded last month', () => {
    expect(() => { service.validateDateExpression([2000, 12]); }).toThrow(new InvalidDateExpressionError("Maximum Month number exceeded! MONTH <= 11"));
  });

  it('should throw invalid date if DAY is undefined', () => {
    expect(() => { service.validateDateExpression([2000, 11]); }).toThrow(new InvalidDateExpressionError("Undefined value of DAY not allowed!"));
  });

  it('should throw invalid date if DAY is negative', () => {
    expect(() => { service.validateDateExpression([2000, 11, -1]); }).toThrow(new InvalidDateExpressionError("DAY is less than 1 not allowed."));
  });

  it('should throw invalid date if DAY exceeded 31', () => {
    expect(() => { service.validateDateExpression([2000, 11, 33]); }).toThrow(new InvalidDateExpressionError("Maximum Day number exceeded! DAY <= 31"));
  });

  it('should validate PossibleDate', () => {
    const expectedDate = new Date(2000, 11, 31);
    const possibleDate = service.validatePossibleDate(new Date(2000, 11, 31));
    expect(possibleDate).toEqual(expectedDate);
  });

  it('should throw invalid Date if Invalid Date is returned', () => {
    expect(() => { service.validatePossibleDate(new Date('')); }).toThrow(new InvalidDateExpressionError("Expression is not a valid date"));
  });
});
