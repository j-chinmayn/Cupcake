import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-cupcake-index',
  standalone: true,
  imports: [],
  templateUrl: './cupcake-index.component.html',
  styleUrl: './cupcake-index.component.css'
})
export class CupcakeIndexComponent {

  constructor(private cupcake: Router) {
  }

  cupcakeCount(count: number):void{
    const bundleChoice = count * 2;
    this.cupcake.navigate(['/order'], {queryParams: {count: bundleChoice}});
  }
}
