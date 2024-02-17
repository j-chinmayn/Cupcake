import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {UserPreference} from "../user-preference";
import {CupcakePreferenceService} from "../cupcake-preference.service";

@Component({
  selector: 'app-cupcake-confirm',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './cupcake-confirm.component.html',
  styleUrl: './cupcake-confirm.component.css'
})
export class CupcakeConfirmComponent {
  userPreference: UserPreference;
  constructor(service: CupcakePreferenceService) {
    this.userPreference = service.userPreference;
  }

}
