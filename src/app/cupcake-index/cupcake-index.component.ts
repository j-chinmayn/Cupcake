import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {BundleChoiceService} from "../bundle-choice.service";

@Component({
  selector: 'app-cupcake-index',
  standalone: true,
  imports: [],
  templateUrl: './cupcake-index.component.html',
  styleUrl: './cupcake-index.component.css'
})
export class CupcakeIndexComponent {

  constructor(public cupcake: Router, public bundleChoiceService: BundleChoiceService) {
  }

  cupcakeCount(count: number):void{
    const bundleChoice = count * 2;
    this.bundleChoiceService.setBundleChoice(bundleChoice);
    this.cupcake.navigate(['/order'], {queryParams: {count: bundleChoice}});
  }
}
