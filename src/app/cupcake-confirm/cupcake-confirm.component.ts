import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {UserPreference} from "../user-preference";
import {CupcakePreferenceService} from "../cupcake-preference.service";
import {CurrencyPipe} from "@angular/common";
import {BundleChoiceService} from "../bundle-choice.service";

@Component({
  selector: 'app-cupcake-confirm',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe
  ],
  templateUrl: './cupcake-confirm.component.html',
  styleUrl: './cupcake-confirm.component.css'
})
export class CupcakeConfirmComponent {
  userPreference: UserPreference;
  bundleChoice: number;
  constructor(service: CupcakePreferenceService, public bundleChoiceService: BundleChoiceService) {
    this.userPreference = service.userPreference;
    this.bundleChoice = this.bundleChoiceService.getBundleChoice();
  }

}
