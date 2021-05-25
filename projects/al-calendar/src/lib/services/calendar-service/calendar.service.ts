import { ValidationService } from './../../validation/validation.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private validation: ValidationService) { }

  /**
   * It generates date from expresion.
   * When it is invalid date throws Error with message provided messeges.
   * @param exprestion that will generate date.
   */
  generateDate(...exprestion: any[]): Date {
    this.validation.validateDateExpresion(exprestion);
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
   * Calculates offested from given date using offest
   * @param offest that will calculated how many days to offest from given date.
   * @param startingDate if no given date is supplied use the current date.
   * @returns
   */
  getOffestDate(offest: number = 0, startingDate: Date = new Date()): Date {
    const offestDate = new Date();
    offestDate.setDate(startingDate.getDate() + offest);
    return offestDate;
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

}
