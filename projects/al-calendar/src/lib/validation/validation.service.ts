import { Injectable } from '@angular/core';
import { EmptyDateError } from '../errors/empty-date-error';
import InvalidDateExpressionError from '../errors/invalid-expression-error';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  STRING_TYPE = 'string';
  NUMBER_TYPE = 'number';
  private possibleArgumentTypes = new Map<string, boolean>();


  // let today = new Date()
  // let birthday = new Date('December 17, 1995 03:24:00')
  // let birthday = new Date('1995-12-17T03:24:00')
  // let birthday = new Date(1995, 11, 17)            // the month is 0-indexed
  // let birthday = new Date(1995, 11, 17, 3, 24, 0)
  // let birthday = new Date(628021800000)
  constructor() {
    this.possibleArgumentTypes.set(this.STRING_TYPE, true);
    this.possibleArgumentTypes.set(this.NUMBER_TYPE, true);
    this.possibleArgumentTypes.set(undefined, false);
  }

  validateDateExpresion(args: string[] | number[]): boolean {
    if (!args) {
      throw new InvalidDateExpressionError("Undefined value of expression!");
    }

    if (!args.length) {
      throw new InvalidDateExpressionError("Undefined value of expression!");
    }

    // Get First expression
    let expression = args[0];

    // Test first expression.
    if (!expression) {
      throw new InvalidDateExpressionError("Undefined value of expression!");
    }

    // Check if expression is of string.
    if (typeof expression == this.STRING_TYPE) {
      //NOTES: We could make REGEX to test if the string is formated.
      return true;
    }

    let expression2 = args[1];
    if (!expression2) {
      throw new InvalidDateExpressionError('Undefined value of MONTH not allowed!');
    }

    if (typeof expression2 == this.NUMBER_TYPE) {
      if (expression2 < 0) {
        throw new InvalidDateExpressionError("No Negative MONTH is allowed!");
      }

      if (expression2 > 11) {
        throw new InvalidDateExpressionError("Maximum Month number exceeded! MONTH <= 11");
      }
    }

    let expression3 = args[2];

    if (!expression3) {
      throw new InvalidDateExpressionError("Undefined value of DAY not allowed!");
    }

    if (typeof expression3 == this.NUMBER_TYPE) {
      if (expression3 < 1) {
        throw new InvalidDateExpressionError("DAY is less than 1 now allowed.");
      }

      if (expression3 > 31) {
        throw new InvalidDateExpressionError("Maximum Day number exceeded! DAY <= 31");
      }
    }
    return true;
  }

  validatePossibleDate(possibeDate: Date): Date {
    if (Object.prototype.toString.call(possibeDate) === "[object Date]")
      if (isNaN(possibeDate.valueOf())) {
        throw new InvalidDateExpressionError();
      } else {
        return possibeDate;
      }
  }

  isExpressionString(expresion): boolean {
    if (typeof expresion == this.STRING_TYPE) {
      return true;
    } else {
      return false;
    }
  }

}
