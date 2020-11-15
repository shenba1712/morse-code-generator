import {Component, OnInit} from '@angular/core';
import {Numbers} from '../../domain/numbers.enum';
import {Characters} from '../../domain/characters.enum';
import {Alphabets} from '../../domain/alphabets.enum';
import {SpecialChar} from '../../domain/special-char.enum';
import {faArrowDown, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {ConversionHistory} from '../../domain/history';

@Component({
  selector: 'app-morse-code-text',
  templateUrl: './morse-code-text.component.html',
  styleUrls: ['./morse-code-text.component.scss']
})
export class MorseCodeTextComponent implements OnInit {

  morseCode: string;
  text: string;
  arrowRightIcon = faArrowRight;
  arrowDownIcon = faArrowDown;

  storage: ConversionHistory[];

  alphabetKeys = Object.keys(Alphabets);
  numberKeys = Object.keys(Numbers);
  specialCharKeys = Object.keys(SpecialChar);

  constructor() { }

  ngOnInit() {
    const jsonObject = JSON.parse(localStorage.getItem('morsecode-to-text'));
    if (!!jsonObject) {
      this.storage = Object.entries(jsonObject).map(entry => {
        const entryValue = entry[1] as ConversionHistory;
        return {
          key: entryValue.key,
          value: entryValue.value
        };
      });
    }

    if (!this.storage) {
      this.storage = [];
    }
  }

  generateText() {
      this.text = '';
      const morsecode = this.morseCode.trim();
      const codeArray = morsecode.split(' ');
      codeArray.forEach(code => {
        if (code === '/') {
          this.text += ' ';
        } else {
          let char = this.alphabetKeys.find(key => Alphabets[key] === code);
          if (!!char) {
            this.text += char;
          } else {
            char = this.numberKeys.find(key => Numbers[key] === code);
            if (!!char) {
              this.text += Characters[char];
            } else {
              char = this.specialCharKeys.find(key => SpecialChar[key] === code);
              if (!!char) {
                this.text += Characters[char];
              }
            }
          }
        }
      });
      if (!!this.text && !!this.morseCode) {
        this.saveToStorage();
      }
  }

  private saveToStorage() {
    if (this.storage.length > 10) {
      this.storage.splice(0, 1);
    }
    this.storage.push({
      key: this.text.toUpperCase(),
      value: this.morseCode
    });
    localStorage.setItem('morsecode-to-text', JSON.stringify(this.storage));
  }

  private isLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
  }

  isMobile() {
    return window.matchMedia('(max-width: 487px)').matches;
  }


}
