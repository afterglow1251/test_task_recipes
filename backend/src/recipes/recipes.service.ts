import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RecipesService {
  private readonly apiUrl: string;

  constructor(private readonly configService: ConfigService) {
    this.apiUrl = this.configService.getOrThrow<string>('API_URL');
  }

  async getAllRecipes(): Promise<any> {
    const response = await axios.get(`${this.apiUrl}/search.php?s=`);
    return response.data;
  }

  async getRecipesByIngredient(ingredient: string): Promise<any> {
    const response = await axios.get(
      `${this.apiUrl}/filter.php?i=${ingredient}`,
    );
    return response.data;
  }

  async getRecipesByCountry(country: string): Promise<any> {
    const response = await axios.get(`${this.apiUrl}/filter.php?a=${country}`);
    return response.data;
  }

  async getRecipesByCategory(category: string): Promise<any> {
    const response = await axios.get(`${this.apiUrl}/filter.php?c=${category}`);
    return response.data;
  }

  async getRecipeDetails(id: number): Promise<any> {
    const response = await axios.get(`${this.apiUrl}/lookup.php?i=${id}`);
    return response.data;
  }
}
