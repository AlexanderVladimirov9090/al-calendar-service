import { NgModule } from '@angular/core';
import { CalendarService } from './services/calendar-service/calendar.service';
import { DateFormatService } from './services/date-format-service/date-format.service';
import { ValidationService } from './validation/validation.service';


@NgModule({
  providers: [
    CalendarService,
    DateFormatService,
    ValidationService
  ]
})
export class AlCalendarModule { }
export { CalendarService } from './services/calendar-service/calendar.service';
export { DateFormatService } from './services/date-format-service/date-format.service';
export { ValidationService } from './validation/validation.service';

