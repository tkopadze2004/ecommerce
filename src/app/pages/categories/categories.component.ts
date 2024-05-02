import { Component, OnInit, inject } from '@angular/core';
import { CategoryFacade } from '../../facades/category.facade';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [JsonPipe,AsyncPipe],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent  implements OnInit{
  // categoryFacade=inject(CategoryFacade)
  // categories$=this.categoryFacade.getCategories()
  route=inject(ActivatedRoute)
 ngOnInit(): void {
   this.route.params.subscribe((params)=>{
    console.log(params);

   })
 }

}
