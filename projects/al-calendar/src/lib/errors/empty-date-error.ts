export class EmptyDateError implements Error {
  name: string = 'EmptyDateError';
  message: string;
  stack?: string;
  constructor(message: string = 'No date is given to format') {
    this.message = message;
  }
}
