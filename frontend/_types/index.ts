export interface Recipe {
  idMeal: string;
  strMeal: string;
  strArea: string;
  strMealThumb: string;
  strInstructions: string;
  strCategory: string;
  [key: `strIngredient${number}`]: string;
}
