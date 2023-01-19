import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormatService {
  private prefixStart = '01/01/';
  private prefixEnd = '12/31/';
  private dateSeparator = '-';
  public DATE_FORMATS = {
    ddMMYYYY: `dd${this.dateSeparator}MM${this.dateSeparator}yyyy`,
    MMddYYYY: `MM${this.dateSeparator}dd${this.dateSeparator}yyyy`,
    YYYYddMM: `yyyy${this.dateSeparator}dd${this.dateSeparator}MM`,
    yyyyMMdd: `yyyy${this.dateSeparator}MM${this.dateSeparator}dd`,
    yyyyMM: `yyyy${this.dateSeparator}MM`,
    MMyyyy: `MM${this.dateSeparator}yyyy`
  };

  public TIME_FORMAT = {
    time: 'hh:mm:ss'
  }

  constructor() { }

  setDateFormat(dateSeparator: string) {
    this.dateSeparator = dateSeparator || '-';
    this.DATE_FORMATS = {
      ddMMYYYY: `dd${this.dateSeparator}MM${this.dateSeparator}yyyy`,
      MMddYYYY: `MM${this.dateSeparator}dd${this.dateSeparator}yyyy`,
      YYYYddMM: `yyyy${this.dateSeparator}dd${this.dateSeparator}MM`,
      yyyyMMdd: `yyyy${this.dateSeparator}MM${this.dateSeparator}dd`,
      yyyyMM: `yyyy${this.dateSeparator}MM`,
      MMyyyy: `MM${this.dateSeparator}yyyy`
    }
  }

  formattedDateString(date: Date, stringFormat: string = this.DATE_FORMATS.ddMMYYYY, locale: string = 'en-US'): string {
    return formatDate(date, stringFormat, locale);
  }

  formatTime(date: Date) {
    return formatDate(date, 'hh:mm:ss', 'en-US');
  }

  formatDateToString(date: Date) {
    return `${formatDate(date, 'yyyy-MM-dd', 'en-US')}T00:00:00`;
  }

}
