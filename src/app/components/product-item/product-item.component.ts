import { Component, Input, input } from '@angular/core';
import { Products } from '../../core/interfaces.ts/products';
import { CurrencyPipe } from '@angular/common';
import { StockPipe } from "../../core/pipes/stock.pipe";

@Component({
    selector: 'app-product-item',
    standalone: true,
    templateUrl: './product-item.component.html',
    styleUrl: './product-item.component.scss',
    imports: [CurrencyPipe, StockPipe]
})
export class ProductItemComponent {
@Input() product : Products | undefined
}
