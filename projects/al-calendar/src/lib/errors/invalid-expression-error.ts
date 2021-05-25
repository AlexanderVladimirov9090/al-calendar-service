export default class InvalidDateExpressionError implements Error {
  name: string = 'InvalidDateExpressionError';
  message: string;
  stack?: string;

  constructor(message: string = 'Expression is not a valid date') {
    this.message = message;
  }
}

