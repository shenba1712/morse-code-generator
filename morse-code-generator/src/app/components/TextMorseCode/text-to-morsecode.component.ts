import {Component, OnInit} from '@angular/core';
import {Alphabets} from '../../domain/alphabets.enum';
import {Numbers} from '../../domain/numbers.enum';
import {Characters} from '../../domain/characters.enum';
import {SpecialChar} from '../../domain/special-char.enum';
import {faArrowRight, faPauseCircle, faPlayCircle, faStopCircle} from '@fortawesome/free-solid-svg-icons';
import {ConversionHistory} from '../../domain/history';

@Component({
  selector: 'app-text-morse-code',
  templateUrl: './text-to-morsecode.component.html',
  styleUrls: ['./text-to-morsecode.component.scss']
})
export class TextToMorsecodeComponent implements OnInit {

  searchText: string;
  morsecode: string;
  storage: ConversionHistory[];

  // icons
  arrowIcon = faArrowRight;
  play = faPlayCircle;
  pause = faPauseCircle;
  stop = faStopCircle;

  private audioContext: AudioContext;
  oscillator: any;
  gain: any;
  rate: any = 20;
  dot: any;

  constructor() { }

  ngOnInit() {
    const jsonObject = JSON.parse(localStorage.getItem('text-to-morseCode'));
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

  generateMorseCode() {
      this.morsecode = '';
      const text = this.searchText.trim().toUpperCase();
      const charArray = [...text];
      charArray.forEach(char => {
        if (char.charCodeAt(0) === 10) {
          this.morsecode += '\n\n';
        } else if (char.match('^[0-9]$')) {
          const key = Object.keys(Numbers).find(n => Characters[n] === char);
          this.morsecode = this.morsecode + Numbers[key] + ' ';
        } else if (this.isLetter(char)) {
          this.morsecode += Alphabets[char] + ' ';
        } else if (char === ' ') {
          this.morsecode += '/ ';
        } else {
          const key = Object.keys(SpecialChar).find(n => Characters[n] === char);
          if (SpecialChar[key] !== undefined) {
            this.morsecode += SpecialChar[key] + ' ';
          }
        }
      });
      this.saveToStorage();
  }

  private saveToStorage() {
    if (this.storage.length > 10) {
      this.storage.splice(0, 1);
    }
    this.storage.push({
      key: this.searchText.toUpperCase(),
      value: this.morsecode
    });
    localStorage.setItem('text-to-morseCode', JSON.stringify(this.storage));
  }

  private isLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
  }

  playMorseText() {
    if (this.audioContext === undefined) {
      // Chrome requires audio context after gesture
      // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
      this.createContext();
    } else if (this.audioContext.state === 'suspended') {
      this.audioContext.resume(); // resume play when paused.
      return;
    }
    this.generateMorseAudio(this.audioContext.currentTime, this.morsecode);
  }

  pauseResumeAudio() {
    if (!!this.audioContext) {
      if (this.audioContext.state === 'running') {
        this.audioContext.suspend();
      }
    }
  }

  stopAudio() {
    if (!!this.audioContext) {
      if (this.audioContext.state !== 'closed') {
        this.audioContext.close().then(() => {
          this.audioContext = undefined;
        });
      }
    }
  }

  private createContext() {
    this.audioContext = new AudioContext();
    this.oscillator = this.audioContext.createOscillator();
    this.gain = this.audioContext.createGain();
    this.gain.gain.value = 0;
    this.oscillator.frequency.value = 750;
    this.oscillator.connect(this.gain);
    this.gain.connect(this.audioContext.destination);
    this.dot = 1.2 / this.rate;
    this.oscillator.start(0);
  }

  private generateMorseAudio(time: any, morse: string) {
    for (const code of morse) {
      if (code === ' ') {
        time += 3 * this.dot;
      } else if (code !== undefined) {
        time = this.createSound(time, code);
        time += 2 * this.dot;
      }
    }
  }

  private createSound(time: any, char: string) {
    for (const c of char) {
      switch (c) {
        case '.':
          this.gain.gain.setValueAtTime(1.0, time);
          time += this.dot;
          this.gain.gain.setValueAtTime(0.0, time);
          break;
        case '-':
          this.gain.gain.setValueAtTime(1.0, time);
          time += 3 * this.dot;
          this.gain.gain.setValueAtTime(0.0, time);
          break;
      }
      time += this.dot;
    }
    return time;
  }

}

