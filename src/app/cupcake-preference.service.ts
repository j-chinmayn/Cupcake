import { Injectable } from '@angular/core';
import {UserPreference} from "./user-preference";

@Injectable({
  providedIn: 'root'
})
export class CupcakePreferenceService {

  userPreference: UserPreference = new UserPreference();

  constructor() { }

  reset(): void {
    this.userPreference = new UserPreference();
  }
}
