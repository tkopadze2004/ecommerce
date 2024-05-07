import { Injectable, inject } from '@angular/core';
import { colorService } from '../services/colors.service';
import { map } from 'rxjs';
import { colors } from '../core/interfaces.ts/colors.interface';

@Injectable({ providedIn: 'root' })
export class colorsFacade {
  colorService = inject(colorService);

  getColors() {
    return this.colorService.getColors().pipe(
      map((colors) => {
        return Object.keys(colors).map(
          (key: any) =>
            ({
              ...colors[key],
              id: key,
            } as colors)
        );
      })
    );
  }

  getColorsById(id: string) {
    return this.colorService.getColorsById(id);
  }
}
