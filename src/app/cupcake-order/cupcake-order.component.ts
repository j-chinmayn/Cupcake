import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {CupcakeChoice} from "../cupcake-choice";
import {CupcakePreferenceService} from "../cupcake-preference.service";
import {UserPreference} from "../user-preference";
import {CurrencyPipe} from "@angular/common";
import {BundleChoiceService} from "../bundle-choice.service";

@Component({
  selector: 'app-cupcake-order',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe
  ],
  templateUrl: './cupcake-order.component.html',
  styleUrl: './cupcake-order.component.css'
})
export class CupcakeOrderComponent {

  userPreference: UserPreference;
  bundleChoice: number;

  constructor(service: CupcakePreferenceService, public bundleChoiceService: BundleChoiceService) {
    service.reset();
    this.userPreference = service.userPreference;
    this.bundleChoice = this.bundleChoiceService.getBundleChoice();
  }

  protected readonly CupcakeChoice = CupcakeChoice;

  setCupcakeChoice(choice: CupcakeChoice): void {
    this.userPreference.cupcakeChoice = choice;
  }

}
