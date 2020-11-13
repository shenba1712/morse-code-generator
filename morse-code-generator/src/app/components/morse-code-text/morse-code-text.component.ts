import { Component } from '@angular/core';
import {Numbers} from '../../domain/numbers.enum';
import {Characters} from '../../domain/characters.enum';
import {Alphabets} from '../../domain/alphabets.enum';
import {SpecialChar} from '../../domain/special-char.enum';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-morse-code-text',
  templateUrl: './morse-code-text.component.html',
  styleUrls: ['./morse-code-text.component.scss']
})
export class MorseCodeTextComponent {

  morseCode: string;
  text: string;
  arrowIcon = faArrowRight;

  alphabetKeys = Object.keys(Alphabets);
  numberKeys = Object.keys(Numbers);
  specialCharKeys = Object.keys(SpecialChar);

  constructor() { }

  generateText(event) {
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
    }

  isLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
  }


}
