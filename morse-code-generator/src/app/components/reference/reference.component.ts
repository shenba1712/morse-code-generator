import {Component, Input, OnInit} from '@angular/core';
import {Alphabets} from '../../domain/alphabets.enum';
import {Numbers} from '../../domain/numbers.enum';
import {SpecialChar} from '../../domain/special-char.enum';
import {Characters} from '../../domain/characters.enum';
import {ConversionHistory} from '../../domain/history';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent {
  @Input() history: ConversionHistory[];
  alphabetKeys: string[];
  alphabetCode = Alphabets;
  alphabetPagedList: string[];

  numberKeys: string[];
  numberCode = Numbers;

  splCharKeys: string[];
  splCharCode = SpecialChar;
  splCharPagedList: string[];

  constructor() {
    this.alphabetKeys = Object.keys(Alphabets);
    this.numberKeys = Object.keys(Numbers);
    this.splCharKeys = Object.keys(SpecialChar);
    this.alphabetPagedList = Object.keys(Alphabets).slice(0, 10);
    this.splCharPagedList = Object.keys(SpecialChar).slice(0, 5);
  }

  convertCode(code: string): string {
    return code.split('').join(' ');
  }

  format(key: string): string {
    return key.replace('_', ' ');
  }

  showKey(key: string): string {
    if (!!Characters[key]) {
      return(Characters[key]);
    }
    return key;
  }

  pageAlphabetEvent(event) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.alphabetKeys.length) {
      endIndex = this.alphabetKeys.length;
    }
    this.alphabetPagedList = this.alphabetKeys.slice(startIndex, endIndex);
  }

  pageSplCharEvent(event) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.splCharKeys.length) {
      endIndex = this.splCharKeys.length;
    }
    this.splCharPagedList = this.splCharKeys.slice(startIndex, endIndex);
  }

}
