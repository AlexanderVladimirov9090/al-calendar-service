import { Injectable } from '@angular/core';
import { ValidationService } from './../../validation/validation.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private validation: ValidationService = new ValidationService()) { }

  /**
   * It generates date from expression.
   * When it is invalid date throws Error with message provided messages.
   * @param expression that will generate date.
   */
  generateDate(...expression: any[]): Date {
    this.validation.validateDateExpression(expression);
    if (this.validation.isExpressionString(expression[0])) {
      return this.validation.validatePossibleDate(new Date(expression[0]));
    }
    return this.validation.validatePossibleDate(
      new Date(
        expression[0],
        expression[1],
        expression[2],
        expression[3] || 0,
        expression[4] || 0,
        expression[5] || 0,
        expression[6] || 0));
  }

  /**
   * Gets current Date.
   * @returns current date.
   */
  getNow(): Date {
    return new Date(Date.now());
  }

  /**
   * Calculates offset from given date using offset
   * @param offset that will calculated how many days to offset from given date.
   * @param startingDate if no given date is supplied use the current date.
   * @returns
   */
  getOffsetDate(offset: number = 0, startingDate: Date = new Date()): Date {
    return new Date(startingDate.getFullYear(), startingDate.getMonth(), startingDate.getDate() + offset);
  }

  /**
   * Gets first date from the given year.
   * @param year if no given year is supplied use the current year.
   * @returns first date from given year.
   */
  getFirstDateOfYear(year: number = new Date().getFullYear()): Date {
    return new Date(year, 0, 1);
  }

  /**
   * Gets last date from the given year.
   * @param year if no given year is supplied use the current year.
   * @returns last date form given year.
   */
  getLastDateOfYear(year: number = new Date().getFullYear()): Date {
    return new Date(year, 11, 31);
  }


  stripUTC(date: any): string {
    if (date instanceof Date) {
      return date.toISOString().replace('Z', '');
    }
    return `${date}`.replace('Z', '');
  }
  // 2016-01-01T00:00:00 2016-01-01T00:00:00Z   Remove Z when user wants to
}
