import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { EmptyDateError } from '../../errors/empty-date-error';

@Injectable({
  providedIn: 'root'
})
export class DateFormatService {
  prefixStart = '01/01/';
  prefixEnd = '12/31/';

  DATE_FORMATS = {

  }
  private dateSeperator = '-'
  constructor(dateSeperator?: string) {
    this.setDateFormat(dateSeperator);
  }

  setDateFormat(dateSeperator: string) {
    this.dateSeperator = dateSeperator || '-';
    this.DATE_FORMATS = {
      ddMMYYYY: `dd${this.dateSeperator}MM${this.dateSeperator}yyyy`,
      MMddYYYY: `MM${this.dateSeperator}dd${this.dateSeperator}yyyy`,
      YYYYddMM: `yyyy${this.dateSeperator}dd${this.dateSeperator}MM`,
      yyyyMMdd: `yyyy${this.dateSeperator}MM${this.dateSeperator}dd`,
      yyyyMM: `yyyy${this.dateSeperator}MM`,
      MMyyyy: `MM${this.dateSeperator}yyyy`,
    }
  }

  formatMMDDYYYY(date: Date) {
    if (!date) {
      throw new EmptyDateError();
    }
    return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
  }

  formatMM_DD_YYYY_Time(date: Date) {
    return `${date.getMonth()}_${date.getDate()}_${date.getFullYear()}_${date.getHours()}${date.getMinutes()}`;
  }

  formatLastDayMM_DD_YYYY(year) {
    return `${this.prefixEnd}${year}`;
  }

  getYearIntervalAsString(date) {
    return `${this.prefixStart}${date} - ${this.prefixEnd}${date}`;
  }

  formatTime(date: Date) {
    return formatDate(date, 'hh:mm:ss a', 'en-US');
  }

  formatDateToString(date: Date) {
    return `${formatDate(date, 'yyyy-MM-dd', 'en-US')}T00:00:00`;
  }

  stripUTC(date: any): string {
    return `${date}`.replace('Z', '');
  }
  // 2016-01-01T00:00:00 2016-01-01T00:00:00Z   Remove Z when user wants to
}
