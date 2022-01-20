import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormatService {
  private prefixStart = '01/01/';
  private prefixEnd = '12/31/';
  private dateSeperator = '-';
  public DATE_FORMATS = {
    ddMMYYYY: `dd${this.dateSeperator}MM${this.dateSeperator}yyyy`,
    MMddYYYY: `MM${this.dateSeperator}dd${this.dateSeperator}yyyy`,
    YYYYddMM: `yyyy${this.dateSeperator}dd${this.dateSeperator}MM`,
    yyyyMMdd: `yyyy${this.dateSeperator}MM${this.dateSeperator}dd`,
    yyyyMM: `yyyy${this.dateSeperator}MM`,
    MMyyyy: `MM${this.dateSeperator}yyyy`
  };

  public TIME_FORMAT = {
    time: 'hh:mm:ss'
  }

  constructor() { }

  setDateFormat(dateSeperator: string) {
    this.dateSeperator = dateSeperator || '-';
    this.DATE_FORMATS = {
      ddMMYYYY: `dd${this.dateSeperator}MM${this.dateSeperator}yyyy`,
      MMddYYYY: `MM${this.dateSeperator}dd${this.dateSeperator}yyyy`,
      YYYYddMM: `yyyy${this.dateSeperator}dd${this.dateSeperator}MM`,
      yyyyMMdd: `yyyy${this.dateSeperator}MM${this.dateSeperator}dd`,
      yyyyMM: `yyyy${this.dateSeperator}MM`,
      MMyyyy: `MM${this.dateSeperator}yyyy`
    }
  }

  formatedDateString(date: Date, stringFomrat: string = this.DATE_FORMATS.ddMMYYYY, locale: string = 'en-US'): string {
    return formatDate(date, stringFomrat, locale);
  }

  formatTime(date: Date) {
    return formatDate(date, 'hh:mm:ss', 'en-US');
  }

  formatDateToString(date: Date) {
    return `${formatDate(date, 'yyyy-MM-dd', 'en-US')}T00:00:00`;
  }

}
