import { Component, Input } from '@angular/core';
import { StockPipe } from "../../core/pipes/stock.pipe";

@Component({
    selector: 'app-stock-check',
    standalone: true,
    templateUrl: './stock-check.component.html',
    styleUrl: './stock-check.component.scss',
    imports: [StockPipe]
})
export class StockCheckComponent {

  @Input() instock:boolean=false
}
