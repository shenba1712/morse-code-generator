import {Component, Input, OnInit} from '@angular/core';
import {Alphabets} from '../../domain/alphabets.enum';
import {Numbers} from '../../domain/numbers.enum';
import {SpecialChar} from '../../domain/special-char.enum';
import {Characters} from '../../domain/characters.enum';
import {ConversionHistory} from '../../domain/history';
import {faPauseCircle, faPlayCircle, faStopCircle} from '@fortawesome/free-solid-svg-icons';

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

  // icons
  play = faPlayCircle;
  pause = faPauseCircle;
  stop = faStopCircle;

  private audioContexts: AudioContext[] = [];
  oscillator = [];
  gain = [];
  rate: any = 20;
  dot: any;

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

  playMorseText(index, value) {
    if (this.audioContexts[index] === undefined) {
      // Chrome requires audio context after gesture
      // https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#webaudio
      this.createContext(index);
    } else if (this.audioContexts[index].state === 'suspended') {
      this.audioContexts[index].resume(); // resume play when paused.
      return;
    }
    this.generateMorseAudio(index, this.audioContexts[index].currentTime, value);
  }

  pauseResumeAudio(index) {
    if (!!this.audioContexts[index]) {
      if (this.audioContexts[index].state === 'running') {
        this.audioContexts[index].suspend();
      }
    }
  }

  stopAudio(index) {
    if (!!this.audioContexts) {
      if (this.audioContexts[index].state !== 'closed') {
        this.audioContexts[index].close().then(() => {
          this.audioContexts[index] = undefined;
        });
      }
    }
  }

  private createContext(index) {
    this.audioContexts[index] = new AudioContext();
    this.oscillator[index] = this.audioContexts[index].createOscillator();
    this.gain[index] = this.audioContexts[index].createGain();
    this.gain[index].gain.value = 0;
    this.oscillator[index].frequency.value = 750;
    this.oscillator[index].connect(this.gain[index]);
    this.gain[index].connect(this.audioContexts[index].destination);
    this.dot = 1.2 / this.rate;
    this.oscillator[index].start(0);
  }

  private generateMorseAudio(index: number, time: any, morse: string) {
    for (const code of morse) {
      if (code === ' ') {
        time += 3 * this.dot;
      } else if (code !== undefined) {
        time = this.createSound(index, time, code);
        time += 2 * this.dot;
      }
    }
  }

  private createSound(index, time: any, char: string) {
    for (const c of char) {
      switch (c) {
        case '.':
          this.gain[index].gain.setValueAtTime(1.0, time);
          time += this.dot;
          this.gain[index].gain.setValueAtTime(0.0, time);
          break;
        case '-':
          this.gain[index].gain.setValueAtTime(1.0, time);
          time += 3 * this.dot;
          this.gain[index].gain.setValueAtTime(0.0, time);
          break;
      }
      time += this.dot;
    }
    return time;
  }


}
