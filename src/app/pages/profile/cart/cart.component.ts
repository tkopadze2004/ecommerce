import { Component } from '@angular/core';
import { AuthHeadComponent } from "../../auth/auth-head/auth-head.component";
import { KeyValueComponent } from "../../../components/key-value/key-value.component";

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss',
    imports: [AuthHeadComponent, KeyValueComponent]
})
export class CartComponent {

}
