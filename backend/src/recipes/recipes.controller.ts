import { Controller, Get, Query, Param, ParseIntPipe } from '@nestjs/common';
import { RecipesService } from './recipes.service';

@Controller('api/recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  async getRecipes(@Query('filter') filter: string): Promise<any> {
    if (!filter) {
      return this.recipesService.getAllRecipes();
    }

    if (filter.startsWith('ingredient=')) {
      const ingredient = filter.split('=')[1];
      return this.recipesService.getRecipesByIngredient(ingredient);
    }

    if (filter.startsWith('country=')) {
      const country = filter.split('=')[1];
      return this.recipesService.getRecipesByCountry(country);
    }

    if (filter.startsWith('category=')) {
      const category = filter.split('=')[1];
      return this.recipesService.getRecipesByCategory(category);
    }

    return this.recipesService.getAllRecipes();
  }

  @Get(':id')
  async getRecipeInfo(@Param('id', ParseIntPipe) id: number): Promise<any> {
    return this.recipesService.getRecipeDetails(id);
  }
}
