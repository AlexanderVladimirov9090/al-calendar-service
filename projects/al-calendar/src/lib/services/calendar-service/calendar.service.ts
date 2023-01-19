import { ValidationService } from './../../validation/validation.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private validation: ValidationService = new ValidationService()) { }

  /**
   * It generates date from expresion.
   * When it is invalid date throws Error with message provided messeges.
   * @param exprestion that will generate date.
   */
  generateDate(...exprestion: any[]): Date {
    this.validation.validateDateExpression(exprestion);
    return this.validation.isExpressionString(exprestion[0]) ?
      this.validation.validatePossibleDate(new Date(exprestion[0]))
      :
      this.validation.validatePossibleDate(new Date(exprestion[0], exprestion[1], exprestion[2], exprestion[3]||0, exprestion[4]||0, exprestion[5]||0,exprestion[6]||0));
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
    const offsetDate = new Date();
    offsetDate.setDate(startingDate.getDate() + offset);
    return offsetDate;
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
    return `${date}`.replace('Z', '');
  }
  // 2016-01-01T00:00:00 2016-01-01T00:00:00Z   Remove Z when user wants to

}
