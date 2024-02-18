import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BundleChoiceService {
  private bundleChoice!: number;

  constructor() { }

  setBundleChoice(choice: number): void {
    this.bundleChoice = choice;
  }
  getBundleChoice(): number {
    return this.bundleChoice;
  }

}
