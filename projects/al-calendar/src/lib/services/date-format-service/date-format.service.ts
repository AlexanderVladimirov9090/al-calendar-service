import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { EmptyDateError } from '../../errors/empty-date-error';

@Injectable({
  providedIn: 'root'
})
export class DateFormatService {
  prefixStart = '01/01/';
  prefixEnd = '12/31/';
  constructor() { }


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
}
