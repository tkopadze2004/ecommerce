import { Component, Input, input } from '@angular/core';
import { Products } from '../../core/interfaces.ts/products';
import { CurrencyPipe, NgIf } from '@angular/common';
import { StockPipe } from "../../core/pipes/stock.pipe";
import { RouterLink } from '@angular/router';
import { StockCheckComponent } from "../stock-check/stock-check.component";

@Component({
    selector: 'app-product-item',
    standalone: true,
    templateUrl: './product-item.component.html',
    styleUrl: './product-item.component.scss',
    imports: [CurrencyPipe, StockPipe, RouterLink, StockCheckComponent,NgIf]
})
export class ProductItemComponent {
@Input() product : Products | undefined
}
