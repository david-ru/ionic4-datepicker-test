import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public datePickerDate;
  public datePickerFormattedDate;
  public datePickerObj;

  constructor(
    public modalCtrl: ModalController
  ) {
    this.datePickerDate = new Date(2019, 5, 19);
    moment.locale('es');
    this.datePickerFormattedDate = moment(this.datePickerDate).format('DD MMMM YYYY');
    this.datePickerObj = this.datePickerConfiguration(
      new Date(2019, 5, 16),
      new Date(2019, 6, 15),
      this.datePickerDate);
  }

  private datePickerConfiguration(beginDate: Date, endDate: Date, currentDate: Date) {
    const disabledDates: Date[] = [
    ];
    const datePickerObj: any = {
      inputDate: currentDate, // default new Date()
      fromDate: beginDate, // default null
      toDate: endDate, // default null
      showTodayButton: false, // default true
      closeOnSelect: true, // default false
      disableWeekDays: [], // default []
      mondayFirst: true, // default false
      disabledDates: disabledDates, // default []
      titleLabel: 'Select a date', // default null
      dateFormat: 'DD MMMM YYYY', // default DD MMM YYYY
      clearButton : false , // default true
      momentLocale: 'es-ES', // Default 'en-US'
      yearInAscending: false, // Default false
      btnCloseSetInReverse: true, // Default false
      btnProperties: {
        expand: 'block', // Default 'block'
        fill: '', // Default 'solid'
        size: '', // Default 'default'
        disabled: '', // Default false
        strong: '', // Default false
        color: '' // Default ''
      },
      arrowNextPrev: {
        // nextArrowSrc: 'assets/images/arrow_right.svg',
        // prevArrowSrc: 'assets/images/arrow_left.svg'
      }, // This object supports only SVG files.
      highlightedDates: []  // Default []
    };

    return datePickerObj;
  }
}
